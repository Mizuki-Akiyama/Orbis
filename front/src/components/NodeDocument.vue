<script setup>
import { computed } from 'vue'
import { marked } from 'marked'

const props = defineProps({
  markdown: {
    type: String,
    required: true
  }
})

const htmlContent = computed(() => {
  return marked(props.markdown)
})
</script>

<template>
  <div class="document-container">
    <div class="doc-body md-content" v-html="htmlContent"></div>
  </div>
</template>

<style scoped>
.document-container {
  /* No background, no borders, just typography */
  padding: 20px 0;
}

.doc-body {
  /* md-content styles from global style.css handle the formatting */
}
</style>
