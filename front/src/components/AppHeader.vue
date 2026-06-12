<script setup>
import { useAnalysisStore } from '../store/analysisStore'
import { useRouter } from 'vue-router'

const store = useAnalysisStore()
const router = useRouter()

const goHome = () => {
  router.push('/')
}
</script>

<template>
  <header class="app-header">
    <div class="header-container">
      <div class="logo-area" @click="goHome">
        <span class="logo-dot"></span>
        <span class="logo-text">Orbis.</span>
      </div>
      
      <div class="session-info" v-if="store.currentSessionId">
        <span class="mode-text">{{ store.mode === 'product' ? 'Product → Niche' : 'Niche → Product' }}</span>
        <span class="divider">/</span>
        <span class="input-text">{{ store.inputValue }}</span>
      </div>
    </div>
  </header>
</template>

<style scoped>
.app-header {
  height: 80px;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(12px);
  position: sticky;
  top: 0;
  z-index: 100;
  border-bottom: 1px solid var(--border-subtle);
}

.header-container {
  max-width: 800px;
  margin: 0 auto;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
}

.logo-area {
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
}

.logo-dot {
  width: 8px;
  height: 8px;
  background: var(--text-primary);
  border-radius: 50%;
}

.logo-text {
  font-size: 16px;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: var(--text-primary);
}

.session-info {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  font-family: var(--font-mono);
  color: var(--text-secondary);
}

.divider {
  color: var(--border-default);
}

.mode-text {
  color: var(--text-muted);
}

.input-text {
  font-weight: 500;
  color: var(--text-primary);
  max-width: 200px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
