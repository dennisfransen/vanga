import { addRoutes } from '@/routers/index'

addRoutes([
	{
		path: '/setting',
		name: 'setting-index',
		components: {
			default: () => import('@/modules/setting/views/SettingIndex.vue'),
			MainMenu: () => import('@/components/MainMenu.vue'),
			LeftSidebar: () => import('@/components/LeftSidebar.vue'),
		},
		meta: { title: 'Inställningar' },
	},
])
