import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import MagicPage from '../pages/MagicPage.vue'
import ItemPage from '../pages/ItemsPage.vue'
import MonstersPage from '../pages/MonstersPage.vue'
import StylesPage from '../pages/StylesPage.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/magic', name: 'MagicPage', component: MagicPage },
  { path: '/items', name: 'ItemsPage', component: ItemPage },
  { path: '/monsters', name: 'MonstersPage', component: MonstersPage },
  { path: '/styles', name: 'StylesPage', component: StylesPage },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
