import { addRoutes } from '@/routers/index'

addRoutes([
	{
		path: '/login',
		name: 'login-index',
		component: () => import('@/modules/session/views/LoginIndex.vue'),
		meta: { title: 'Logga in index' },
		children: [
			{
				path: '',
				name: 'login-view',
				component: () => import('@/modules/session/views/LoginView.vue'),
				meta: { title: 'Logga in' },
			},
		],
	},
	{
		path: '/register',
		name: 'register-index',
		component: () => import('@/modules/session/views/RegisterIndex.vue'),
		meta: { title: 'Registrera index' },
		children: [
			{
				path: '',
				name: 'register-view',
				component: () => import('@/modules/session/views/RegisterView.vue'),
				meta: { title: 'Registrera' },
			},
			{
				path: 'family',
				name: 'register-family-view',
				component: () => import('@/modules/session/views/RegisterFamilyView.vue'),
				meta: { title: 'Registrera familjemedlemmar' },
			},
			{
				path: 'addition',
				name: 'register-addition-view',
				component: () => import('@/modules/session/views/RegisterAdditionView.vue'),
				meta: { title: 'Registrera tillägg' },
			},
		],
	},
])
