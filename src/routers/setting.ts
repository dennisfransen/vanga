import { addRoutes } from '@/routers/index'

addRoutes([
	{
		path: '/setting',
		name: 'setting-index',
		component: () => import('@/modules/setting/views/SettingIndex.vue'),
		meta: { title: 'Inställningar' },
	},
])
