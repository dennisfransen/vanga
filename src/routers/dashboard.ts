import { addRoutes } from '@/routers/index'

addRoutes([
	{
		path: '/dashboard',
		name: 'dashboard-index',
		component: () => import('@/modules/dashboard/views/DashboardIndex.vue'),
		meta: { title: 'Översikt' },
	},
])
