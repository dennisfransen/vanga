import { addRoutes } from '@/routers/index'

addRoutes([
	{
		path: '/profile',
		name: 'profile-index',
		components: {
			default: () => import('@/modules/profile/views/ProfileIndex.vue'),
			MainMenu: () => import('@/components/MainMenu.vue'),
			LeftSidebar: () => import('@/components/LeftSidebar.vue'),
		},
		meta: { title: 'Mina Sidor' },
	},
])
