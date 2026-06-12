<script setup>
import { ref, watch, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useAnalysisStore } from '../store/analysisStore'
import StreamingOutput from './StreamingOutput.vue'
import NodeDocument from './NodeDocument.vue'
import ReviewPanel from './ReviewPanel.vue'

const props = defineProps({
  nodeId: { type: Number, required: true },
  nodeData: { type: Object, required: true },
  nextNodeRoute: { type: String, required: true }
})

const store = useAnalysisStore()
const router = useRouter()

const isStreaming = ref(true)
const showDocument = ref(false)
const showReview = ref(false)

const initNodeState = () => {
  const status = store.nodes[store.currentNodeIndex].status
  if (status === 'done') {
    isStreaming.value = false
    showDocument.value = true
    showReview.value = true
  } else {
    isStreaming.value = true
    showDocument.value = false
    showReview.value = false
    store.setNodeStatus(store.currentNodeIndex, 'running')
  }
}

onMounted(initNodeState)

watch(() => props.nodeId, () => {
  initNodeState()
})

const handleStreamComplete = () => {
  isStreaming.value = false
  showDocument.value = true
  setTimeout(() => {
    showReview.value = true
  }, 800)
}

const handleApprove = () => {
  store.nextNode()
  if (props.nextNodeRoute === 'report') {
    router.push('/session/report')
  } else {
    router.push(`/session/node/${props.nodeId + 1}`)
  }
}

const handleReject = (reason) => {
  store.rejectNode()
  props.nodeData.logs.push(`[USER FEEDBACK] ${reason}`)
  props.nodeData.thoughts.unshift(`分析用户反馈: "${reason}"，开始调整...`)
  
  store.retryNode()
  showDocument.value = false
  showReview.value = false
  setTimeout(() => {
    store.setNodeStatus(store.currentNodeIndex, 'running')
    isStreaming.value = true
  }, 300)
}
</script>

<template>
  <article class="scrollytelling-node">
    <div class="narrative-container">
      <StreamingOutput 
        :thoughts="nodeData.thoughts" 
        :logs="nodeData.logs"
        :running="isStreaming"
        @complete="handleStreamComplete"
      />
      
      <transition name="fade-up">
        <div v-if="showDocument" class="document-section">
          <NodeDocument :markdown="nodeData.document" />
        </div>
      </transition>

      <transition name="fade-up">
        <div v-if="showReview" class="review-section">
          <ReviewPanel @approve="handleApprove" @reject="handleReject" />
        </div>
      </transition>
    </div>
  </article>
</template>

<style scoped>
.scrollytelling-node {
  max-width: 760px;
  margin: 0 auto;
  padding-bottom: 120px;
}

.narrative-container {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.document-section {
  position: relative;
}

.document-section::before {
  content: '';
  position: absolute;
  top: -20px;
  left: 50%;
  transform: translateX(-50%);
  width: 40px;
  height: 1px;
  background: var(--border-default);
}

.review-section {
  margin-top: 40px;
}

.fade-up-enter-active,
.fade-up-leave-active {
  transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
}
.fade-up-enter-from {
  opacity: 0;
  transform: translateY(30px);
}
.fade-up-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}
</style>
