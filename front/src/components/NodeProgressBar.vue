<script setup>
import { useAnalysisStore } from '../store/analysisStore'

const store = useAnalysisStore()
</script>

<template>
  <div class="breadcrumb-container">
    <div class="breadcrumb">
      <template v-for="(node, index) in store.nodes" :key="node.id">
        <div 
          class="step"
          :class="[node.status, { active: store.currentNodeIndex === index }]"
        >
          <span class="step-num">{{ index + 1 }}</span>
          <span class="step-label">{{ node.name }}</span>
        </div>
        <span class="separator" v-if="index < store.nodes.length - 1">/</span>
      </template>
    </div>
  </div>
</template>

<style scoped>
.breadcrumb-container {
  padding: 24px 0;
  display: flex;
  justify-content: center;
}

.breadcrumb {
  display: flex;
  align-items: center;
  gap: 12px;
  font-family: var(--font-mono);
  font-size: 12px;
}

.step {
  display: flex;
  align-items: center;
  gap: 6px;
  color: var(--text-muted);
  transition: color var(--transition-base);
}

.step-num {
  font-weight: 500;
}

.step-label {
  display: none;
}

.separator {
  color: var(--border-default);
}

/* Status variants */
.step.done {
  color: var(--text-primary);
}
.step.done .step-num {
  text-decoration: line-through;
  opacity: 0.5;
}

.step.running {
  color: var(--info);
}

.step.rejected {
  color: var(--error);
}

.step.active {
  color: var(--text-primary);
}
.step.active .step-label {
  display: inline;
  font-weight: 600;
}

@media (min-width: 768px) {
  .step-label {
    display: inline;
  }
}
</style>
