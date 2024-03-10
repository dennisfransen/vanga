import { addRoutes } from '@/routers/index'
import HomeView from '@/views/HomeView.vue'

addRoutes([
	{
		path: '/',
		name: 'home',
		component: HomeView,
	},
])
