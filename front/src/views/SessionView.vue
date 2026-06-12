<script setup>
import { useRouter } from 'vue-router'
import { useAnalysisStore } from '../store/analysisStore'
import NodeProgressBar from '../components/NodeProgressBar.vue'

const store = useAnalysisStore()
const router = useRouter()

// Protect route
if (!store.currentSessionId) {
  router.push('/')
}
</script>

<template>
  <div class="session-layout">
    <NodeProgressBar />
    <div class="content-area">
      <router-view v-slot="{ Component }">
        <transition name="fade-slide" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </div>
  </div>
</template>

<style scoped>
.session-layout {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.content-area {
  flex: 1;
  padding: 0 24px 80px;
  width: 100%;
}

.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}
.fade-slide-enter-from {
  opacity: 0;
  transform: translateY(20px);
}
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
</style>
