import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SessionView from '../views/SessionView.vue'
import Node01 from '../views/nodes/Node01TrackId.vue'
import Node02 from '../views/nodes/Node02Competitors.vue'
import Node03 from '../views/nodes/Node03UserPain.vue'
import Node04 from '../views/nodes/Node04Positioning.vue'
import Node05 from '../views/nodes/Node05Gaps.vue'
import FinalReport from '../views/nodes/FinalReport.vue'

const routes = [
  { path: '/', name: 'home', component: HomeView },
  {
    path: '/session',
    component: SessionView,
    children: [
      { path: 'node/1', name: 'node1', component: Node01 },
      { path: 'node/2', name: 'node2', component: Node02 },
      { path: 'node/3', name: 'node3', component: Node03 },
      { path: 'node/4', name: 'node4', component: Node04 },
      { path: 'node/5', name: 'node5', component: Node05 },
      { path: 'report', name: 'report', component: FinalReport },
    ]
  }
]

export default createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior: () => ({ top: 0 })
})
