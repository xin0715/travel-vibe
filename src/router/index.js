// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'

// 預設先用空元件，之後會補內容
import Index from '@/pages/Index.vue'
import Weather from '@/pages/Weather.vue'
import Outfit from '@/pages/Outfit.vue'
import Planner from '@/pages/Planner.vue'
import Game from '@/pages/Game.vue'

const routes = [
    { path: '/', component: Index },
    { path: '/weather', component: Weather },
    { path: '/outfit', component: Outfit },
    { path: '/travel-planner', component: Planner },
    { path: '/mini-game', component: Game },
]

const router = createRouter({
    history: createWebHistory('/travel-vibe/'), // 這裡加 base 路徑
    routes
})

export default router