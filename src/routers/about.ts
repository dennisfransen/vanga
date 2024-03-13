import { addRoutes } from '@/routers/index'

addRoutes([
	{
		path: '/about',
		name: 'about-index',
		component: () => import('@/modules/about/views/AboutIndex.vue'),
		meta: { title: 'Om oss' },
	},
])
