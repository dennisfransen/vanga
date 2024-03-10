import { addRoutes } from '@/routers/index'

addRoutes([
	{
		path: '/about',
		name: 'about',
		component: () => import('@/views/AboutView.vue'),
	},
])
