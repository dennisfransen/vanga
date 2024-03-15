import { addRoutes } from '@/routers/index'

addRoutes([
	{
		path: '/membership',
		name: 'membership-index',
		components: {
			default: () => import('@/modules/membership/views/MembershipIndex.vue'),
			MainMenu: () => import('@/components/MainMenu.vue'),
			LeftSidebar: () => import('@/components/LeftSidebar.vue'),
		},
		meta: { title: 'Medlemskap' },
	},
])
