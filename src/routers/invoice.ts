import { addRoutes } from '@/routers/index'

addRoutes([
	{
		path: '/invoice',
		name: 'invoice-index',
		component: () => import('@/modules/invoice/views/InvoiceIndex.vue'),
		meta: { title: 'Fakturering' },
	},
])
