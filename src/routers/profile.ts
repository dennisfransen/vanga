import { addRoutes } from '@/routers/index'

addRoutes([
	{
		path: '/profile',
		name: 'profile-index',
		component: () => import('@/modules/profile/views/ProfileIndex.vue'),
		meta: { title: 'Mina Sidor' },
	},
])
