import { addRoutes } from '@/routers/index'

addRoutes([
	{
		path: '/invoice',
		name: 'invoice-index',
		components: {
			default: () => import('@/modules/invoice/views/InvoiceIndex.vue'),
			MainMenu: () => import('@/components/MainMenu.vue'),
			LeftSidebar: () => import('@/components/LeftSidebar.vue'),
		},
		meta: { title: 'Fakturering' },
	},
])
