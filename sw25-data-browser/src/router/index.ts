import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import MagicPage from '../pages/MagicPage.vue'
import ItemPage from '../pages/ItemsPage.vue'
import MonstersPage from '../pages/MonstersPage.vue'
import StylesPage from '../pages/Martial_ArtsPage.vue'
import MagicForm from '../components/magic/MagicForm.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/magic', name: 'MagicPage', component: MagicPage },
  { path: '/items', name: 'ItemsPage', component: ItemPage },
  { path: '/martial_arts', name: 'Martial_ArtsPage', component: StylesPage },
  { path: '/monsters', name: 'MonstersPage', component: MonstersPage },

  { path: '/magicform', name: 'MagicForm', component: MagicForm },
  
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
