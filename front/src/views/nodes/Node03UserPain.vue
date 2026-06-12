<script setup>
import { computed } from 'vue'
import { useAnalysisStore } from '../../store/analysisStore'
import { mockScenarios } from '../../mock/scenarios'
import AnalysisNode from '../../components/AnalysisNode.vue'

const store = useAnalysisStore()
const nodeData = computed(() => mockScenarios[store.mode].node3)
</script>

<template>
  <AnalysisNode :nodeId="3" :nodeData="nodeData" nextNodeRoute="node4" />
</template>
