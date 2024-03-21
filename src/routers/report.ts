import { addRoutes } from '@/routers/index'

addRoutes([
	{
		path: '/report',
		name: 'report-index',
		component: () => import('@/modules/report/views/ReportIndex.vue'),
		meta: { title: 'Rapporter' },
	},
])
