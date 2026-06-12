<script setup>
import { computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useAnalysisStore } from '../../store/analysisStore'
import { mockScenarios } from '../../mock/scenarios'
import NodeDocument from '../../components/NodeDocument.vue'
import { Download, RefreshCcw } from 'lucide-vue-next'

const store = useAnalysisStore()
const router = useRouter()

onMounted(() => {
  store.setNodeStatus(5, 'done')
})

const finalReport = computed(() => {
  const scenario = mockScenarios[store.mode]
  if(!scenario) return ''
  return `
# Orbis 最终分析报告：${store.inputValue}

---
${scenario.node1.document}

---
${scenario.node2.document}

---
${scenario.node3.document}

---
${scenario.node4.document}

---
${scenario.node5.document}
  `
})

const restart = () => {
  store.currentSessionId = null
  router.push('/')
}
</script>

<template>
  <div class="report-container animate-fade-in-up">
    <div class="document-wrapper">
      <NodeDocument :markdown="finalReport" />
    </div>
    
    <div class="actions-bar">
      <div class="divider"></div>
      <div class="flex gap-3 justify-center">
        <button class="btn btn-ghost" @click="restart">
          <RefreshCcw size="16" /> 新的分析
        </button>
        <button class="btn btn-primary">
          <Download size="16" /> 导出 Markdown
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.report-container {
  max-width: 760px;
  margin: 0 auto;
  padding-bottom: 120px;
}

.document-wrapper {
  margin-bottom: 60px;
}

.actions-bar {
  text-align: center;
}

.divider {
  height: 1px;
  background: var(--border-subtle);
  width: 100px;
  margin: 0 auto 32px;
}

.justify-center {
  justify-content: center;
}
</style>
