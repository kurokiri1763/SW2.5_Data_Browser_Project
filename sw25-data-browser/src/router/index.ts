import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
// import MagicPage from '../pages/MagicPage.vue'
// import ItemPage from '../pages/ItemPage.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  // { path: '/magic', name: 'MagicPage', component: MagicPage },
  // { path: '/items', name: 'ItemPage', component: ItemPage },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
