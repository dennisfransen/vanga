<script setup lang="ts">
import {
	ArrowTrendingUpIcon,
	BoltIcon,
	CogIcon,
	CurrencyDollarIcon,
	HeartIcon,
	HomeIcon,
} from '@heroicons/vue/24/outline'
</script>

<template>
	<aside class="relative z-10 flex min-h-screen min-w-[4.5rem] flex-col space-y-6 bg-white">
		<section class="grid h-[4.5rem] place-items-center">
			<router-link to="/" class="font-black leading-none">
				<span class="text-blue-500">Mitt</span> <br />
				<span class="text-gray-800">Med</span>
			</router-link>
		</section>

		<section class="flex flex-grow flex-col items-center gap-y-6">
			<router-link to="/dashboard" class="link" active-class="active">
				<home-icon class="h-6 w-6" />
			</router-link>
			<router-link to="/member" class="link" active-class="active">
				<heart-icon class="h-6 w-6" />
			</router-link>
			<router-link to="/invoice" class="link" active-class="active">
				<currency-dollar-icon class="h-6 w-6" />
			</router-link>
			<router-link to="/membership" class="link" active-class="active">
				<bolt-icon class="h-6 w-6" />
			</router-link>
			<router-link to="/report" class="link" active-class="active">
				<arrow-trending-up-icon class="h-6 w-6" />
			</router-link>
			<hr class="w-4" />
		</section>

		<section class="grid h-[4.5rem] place-items-center">
			<router-link to="/setting" class="link" active-class="active">
				<cog-icon class="h-6 w-6" />
			</router-link>
		</section>
	</aside>
</template>

<style scoped lang="postcss">
.link {
	@apply h-10 w-10 rounded-md;
	@apply grid place-items-center;
	@apply transition hover:bg-blue-100;
}

.active {
	@apply bg-blue-200 text-blue-500;
}
</style>
