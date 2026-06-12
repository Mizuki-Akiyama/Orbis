<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAnalysisStore } from '../store/analysisStore'

const router = useRouter()
const store = useAnalysisStore()

const selectedMode = ref('product')
const inputValue = ref('')

const startAnalysis = () => {
  if (!inputValue.value.trim()) return
  store.startSession(selectedMode.value, inputValue.value)
  router.push('/session/node/1')
}
</script>

<template>
  <div class="home-container">
    <div class="hero">
      <h1 class="title animate-fade-in-up">
        Deep Niche Insights.
      </h1>
      <p class="subtitle animate-fade-in-up" style="animation-delay: 0.1s">
        An elegant way to understand market landscapes.
      </p>
    </div>

    <div class="action-area animate-fade-in-up" style="animation-delay: 0.2s">
      <div class="mode-toggles">
        <button 
          class="toggle-btn" 
          :class="{ active: selectedMode === 'product' }"
          @click="selectedMode = 'product'"
        >Product → Niche</button>
        <button 
          class="toggle-btn" 
          :class="{ active: selectedMode === 'niche' }"
          @click="selectedMode = 'niche'"
        >Niche → Product</button>
      </div>

      <div class="input-wrapper">
        <input 
          v-model="inputValue"
          type="text" 
          class="elegant-input"
          :placeholder="selectedMode === 'product' ? 'Type a product name (e.g. Notion)' : 'Type a niche (e.g. AI Companion)'"
          @keyup.enter="startAnalysis"
          autofocus
        />
        <button 
          class="start-btn" 
          :class="{ ready: inputValue.trim().length > 0 }"
          @click="startAnalysis"
        >
          →
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.home-container {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 24px;
}

.hero {
  text-align: center;
  margin-bottom: 64px;
}

.title {
  font-size: 56px;
  font-weight: 800;
  letter-spacing: -0.04em;
  margin-bottom: 16px;
  color: var(--text-primary);
}

.subtitle {
  font-size: 20px;
  font-weight: 300;
  color: var(--text-secondary);
}

.action-area {
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.mode-toggles {
  display: flex;
  gap: 8px;
  margin-bottom: 32px;
  background: var(--bg-surface);
  padding: 4px;
  border-radius: 99px;
}

.toggle-btn {
  background: transparent;
  border: none;
  padding: 8px 20px;
  font-size: 13px;
  font-weight: 600;
  color: var(--text-muted);
  border-radius: 99px;
  cursor: pointer;
  transition: all 0.2s;
}

.toggle-btn.active {
  background: var(--bg-deep);
  color: var(--text-primary);
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
}

.input-wrapper {
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
}

.elegant-input {
  width: 100%;
  background: transparent;
  border: none;
  border-bottom: 2px solid var(--border-default);
  padding: 16px 48px 16px 0;
  font-size: 24px;
  font-weight: 500;
  color: var(--text-primary);
  font-family: inherit;
  transition: border-color 0.3s;
}

.elegant-input:focus {
  outline: none;
  border-color: var(--text-primary);
}

.elegant-input::placeholder {
  color: var(--border-strong);
  font-weight: 300;
}

.start-btn {
  position: absolute;
  right: 0;
  background: transparent;
  border: none;
  font-size: 24px;
  color: var(--border-strong);
  cursor: pointer;
  transition: all 0.3s;
  padding: 8px;
}

.start-btn.ready {
  color: var(--text-primary);
  transform: translateX(4px);
}
</style>
