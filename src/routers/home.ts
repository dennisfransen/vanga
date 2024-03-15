import { addRoutes } from '@/routers/index'

addRoutes([
	{
		path: '/',
		name: 'home-index',
		component: () => import('@/modules/home/views/HomeIndex.vue'),
		meta: { title: 'Start' },
	},
])
