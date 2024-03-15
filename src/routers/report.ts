import { addRoutes } from '@/routers/index'

addRoutes([
	{
		path: '/report',
		name: 'report-index',
		components: {
			default: () => import('@/modules/report/views/ReportIndex.vue'),
			MainMenu: () => import('@/components/MainMenu.vue'),
			LeftSidebar: () => import('@/components/LeftSidebar.vue'),
		},
		meta: { title: 'Rapporter' },
	},
])
