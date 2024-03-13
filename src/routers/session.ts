import { addRoutes } from '@/routers/index'

addRoutes([
	{
		path: '/s',
		name: 'session-index',
		component: () => import('@/modules/session/views/SessionIndex.vue'),
		meta: { title: 'Session' },
		children: [
			{
				path: 'login',
				name: 'login-view',
				component: () => import('@/modules/session/views/LoginView.vue'),
				meta: { title: 'Logga in' },
			},
			{
				path: 'register',
				name: 'register-view',
				component: () => import('@/modules/session/views/RegisterView.vue'),
				meta: { title: 'Registrering' },
			},
		],
	},
])
