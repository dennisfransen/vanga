import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import NotFoundView from '@/views/NotFoundView.vue'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/:pathMatch(.*)*',
			name: 'not-found',
			component: NotFoundView,
		},
	],
})

export function addRoutes(routeRecords: RouteRecordRaw[]) {
	for (const routeRecord of routeRecords) {
		router.addRoute(routeRecord)
	}
}

export default router
