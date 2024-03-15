import { addRoutes } from '@/routers/index'

addRoutes([
	{
		path: '/member',
		name: 'member-index',
		components: {
			default: () => import('@/modules/member/views/MemberIndex.vue'),
			MainMenu: () => import('@/components/MainMenu.vue'),
			LeftSidebar: () => import('@/components/LeftSidebar.vue'),
		},
		meta: { title: 'Medlemmar' },
	},
])
