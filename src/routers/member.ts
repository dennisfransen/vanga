import { addRoutes } from '@/routers/index'

addRoutes([
	{
		path: '/member',
		name: 'member-index',
		component: () => import('@/modules/member/views/MemberIndex.vue'),
		meta: { title: 'Medlemmar' },
	},
])
