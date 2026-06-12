<script setup>
import { ref } from 'vue'

const emit = defineEmits(['approve', 'reject'])
const feedback = ref('')

const handleApprove = () => emit('approve')
const handleReject = () => {
  if (!feedback.value.trim()) {
    alert('请输入反馈意见')
    return
  }
  emit('reject', feedback.value)
}
</script>

<template>
  <div class="review-inline">
    <div class="divider"></div>
    <div class="review-content">
      <h3 class="review-title">Review & Continue</h3>
      <p class="review-subtitle">Looks good? Or tell the agent what to change.</p>
      
      <div class="input-wrapper">
        <input 
          v-model="feedback" 
          type="text"
          placeholder="Add your feedback here... (optional)"
          class="inline-input"
          @keyup.enter="feedback ? handleReject() : handleApprove()"
        />
        <div class="actions">
          <button v-if="feedback.trim()" class="action-btn text-btn reject" @click="handleReject">
            Revise
          </button>
          <button class="action-btn text-btn approve" @click="handleApprove">
            Continue →
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.review-inline {
  margin-top: 60px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.divider {
  height: 1px;
  background: var(--border-default);
  width: 40px;
  margin: 0 auto 32px;
}

.review-content {
  text-align: center;
}

.review-title {
  font-size: 18px;
  font-weight: 700;
  color: var(--text-primary);
  margin: 0 0 4px;
}

.review-subtitle {
  font-size: 14px;
  color: var(--text-muted);
  margin: 0 0 24px;
}

.input-wrapper {
  position: relative;
  background: var(--bg-surface);
  border: 1px solid var(--border-subtle);
  border-radius: 99px;
  padding: 4px;
  padding-left: 20px;
  display: flex;
  align-items: center;
  transition: border-color var(--transition-base);
}

.input-wrapper:focus-within {
  border-color: var(--border-strong);
  background: var(--bg-deep);
}

.inline-input {
  flex: 1;
  background: transparent;
  border: none;
  font-size: 15px;
  color: var(--text-primary);
  font-family: inherit;
}

.inline-input:focus {
  outline: none;
}

.inline-input::placeholder {
  color: var(--text-muted);
}

.actions {
  display: flex;
  align-items: center;
  gap: 8px;
}

.text-btn {
  background: transparent;
  border: none;
  font-weight: 600;
  font-size: 14px;
  padding: 10px 20px;
  border-radius: 99px;
  cursor: pointer;
  transition: all 0.2s;
}

.text-btn.approve {
  background: var(--text-primary);
  color: #fff;
}

.text-btn.approve:hover {
  background: #000;
}

.text-btn.reject {
  color: var(--error);
}

.text-btn.reject:hover {
  background: rgba(239, 68, 68, 0.1);
}
</style>
