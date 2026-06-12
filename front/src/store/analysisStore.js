import { defineStore } from 'pinia'

export const useAnalysisStore = defineStore('analysis', {
  state: () => ({
    mode: '', // 'product' or 'niche'
    inputValue: '',
    currentSessionId: null,
    
    // Status can be: pending, running, done, rejected
    nodes: [
      { id: 1, name: '赛道识别', route: 'node1', status: 'pending' },
      { id: 2, name: '竞品扫描', route: 'node2', status: 'pending' },
      { id: 3, name: '用户痛点', route: 'node3', status: 'pending' },
      { id: 4, name: '定位差异', route: 'node4', status: 'pending' },
      { id: 5, name: '市场空白', route: 'node5', status: 'pending' },
      { id: 6, name: '完整报告', route: 'report', status: 'pending' }
    ],
    currentNodeIndex: 0
  }),
  getters: {
    currentNode: (state) => state.nodes[state.currentNodeIndex]
  },
  actions: {
    startSession(mode, input) {
      this.mode = mode
      this.inputValue = input
      this.currentSessionId = Date.now().toString()
      this.nodes.forEach(n => n.status = 'pending')
      this.currentNodeIndex = 0
    },
    setNodeStatus(index, status) {
      if (this.nodes[index]) {
        this.nodes[index].status = status
      }
    },
    nextNode() {
      if (this.currentNodeIndex < this.nodes.length - 1) {
        this.setNodeStatus(this.currentNodeIndex, 'done')
        this.currentNodeIndex++
      } else {
        this.setNodeStatus(this.currentNodeIndex, 'done')
      }
    },
    rejectNode() {
      this.setNodeStatus(this.currentNodeIndex, 'rejected')
    },
    retryNode() {
      this.setNodeStatus(this.currentNodeIndex, 'pending')
    }
  }
})
