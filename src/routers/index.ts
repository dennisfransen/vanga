import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import NotFoundView from '@/modules/not_found/views/NotFoundIndex.vue'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/:pathMatch(.*)*',
			name: 'not-found',
			component: NotFoundView,
			meta: { title: 'Något gick fel' },
		},
	],
})

export function addRoutes(routeRecords: RouteRecordRaw[]) {
	for (const routeRecord of routeRecords) {
		router.addRoute(routeRecord)
	}
}

router.beforeEach((to) => {
	if (to.meta?.title) {
		document.title = `MM - ${to.meta.title.toString()}`
	}
})

export default router
