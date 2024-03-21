<script setup lang="ts">
import {
	HomeIcon,
	HeartIcon,
	CurrencyDollarIcon,
	BoltIcon,
	ArrowTrendingUpIcon,
	CogIcon,
} from '@heroicons/vue/24/outline'
</script>

<template>
	<aside class="flex min-h-screen min-w-[4.5rem] flex-col space-y-6 bg-white">
		<section class="grid h-[4.5rem] place-items-center">
			<router-link to="/" class="inline-block min-w-10 text-center font-black">
				<span class="text-blue-500">M</span>
				<span>M</span>
			</router-link>
		</section>

		<section class="flex flex-grow flex-col items-center gap-y-6">
			<router-link to="/dashboard" class="link" active-class="active">
				<home-icon class="h-6 w-6" />
				<span class="link-title">Dashboard</span>
			</router-link>
			<router-link to="/member" class="link" active-class="active">
				<heart-icon class="h-6 w-6" />
				<span class="link-title">Medlemmar</span>
			</router-link>
			<router-link to="/invoice" class="link" active-class="active">
				<currency-dollar-icon class="h-6 w-6" />
				<span class="link-title">Fakturering</span>
			</router-link>
			<router-link to="/membership" class="link" active-class="active">
				<bolt-icon class="h-6 w-6" />
				<span class="link-title">Medlemskap & Tillval</span>
			</router-link>
			<router-link to="/report" class="link" active-class="active">
				<arrow-trending-up-icon class="h-6 w-6" />
				<span class="link-title">Rapporter</span>
			</router-link>
			<hr class="w-4" />
		</section>

		<section class="grid h-[4.5rem] place-items-center">
			<router-link to="/setting" class="link" active-class="active">
				<cog-icon class="h-6 w-6" />
				<span class="link-title">Inställningar</span>
			</router-link>
		</section>
	</aside>
</template>

<style scoped lang="postcss">
aside {
	@apply hover:min-w-72 hover:px-4;
}

.link {
	@apply inline-block h-10 w-10;
	@apply grid items-center justify-center rounded-md;
}

.active {
	@apply bg-blue-200 text-blue-500;
}

.link-title {
	@apply hidden;
	@apply group-hover:inline;
}
</style>
