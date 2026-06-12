<script setup>
import { computed } from 'vue'
import { useAnalysisStore } from '../../store/analysisStore'
import { mockScenarios } from '../../mock/scenarios'
import AnalysisNode from '../../components/AnalysisNode.vue'

const store = useAnalysisStore()
const nodeData = computed(() => mockScenarios[store.mode].node2)
</script>

<template>
  <AnalysisNode :nodeId="2" :nodeData="nodeData" nextNodeRoute="node3" />
</template>
