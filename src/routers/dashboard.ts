import { addRoutes } from '@/routers/index'

addRoutes([
	{
		path: '/dashboard',
		name: 'dashboard-index',
		components: {
			default: () => import('@/modules/dashboard/views/DashboardIndex.vue'),
			MainMenu: () => import('@/components/MainMenu.vue'),
			LeftSidebar: () => import('@/components/LeftSidebar.vue'),
		},
		meta: { title: 'Översikt' },
	},
])
