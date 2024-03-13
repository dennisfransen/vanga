import { addRoutes } from '@/routers/index'

addRoutes([
	{
		path: '/',
		name: 'home',
		component: () => import('@/modules/home/views/HomeIndex.vue'),
		meta: { title: 'Start' },
	},
])
