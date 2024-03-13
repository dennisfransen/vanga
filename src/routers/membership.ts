import { addRoutes } from '@/routers/index'

addRoutes([
	{
		path: '/membership',
		name: 'membership-index',
		component: () => import('@/modules/membership/views/MembershipIndex.vue'),
		meta: { title: 'Medlemskap' },
	},
])
