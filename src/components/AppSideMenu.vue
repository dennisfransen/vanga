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
	<aside class="group">
		<section class="h-[4.5rem] py-4">
			<router-link to="/" class="inline-block h-10 p-1.5 text-lg font-black">
				<span>
					<span class="text-blue-500">M</span>
					<span>M</span>
				</span>
			</router-link>
		</section>

		<section class="flex-grow space-y-4">
			<router-link to="/dashboard" class="link" active-class="active">
				<home-icon class="icon" />
				<span class="link-title">Dashboard</span>
			</router-link>
			<router-link to="/member" class="link" active-class="active">
				<heart-icon class="icon" />
				<span class="link-title">Medlemmar</span>
			</router-link>
			<router-link to="/invoice" class="link" active-class="active">
				<currency-dollar-icon class="icon" />
				<span class="link-title">Fakturering</span>
			</router-link>
			<router-link to="/membership" class="link" active-class="active">
				<bolt-icon class="icon" />
				<span class="link-title">Medlemskap & Tillval</span>
			</router-link>
			<router-link to="/report" class="link" active-class="active">
				<arrow-trending-up-icon class="icon" />
				<span class="link-title">Rapporter</span>
			</router-link>
			<hr class="mx-auto w-1/2 transition-all group-hover:mx-0 group-hover:w-full" />
		</section>

		<section class="h-[4.5rem] py-4">
			<router-link to="/setting" class="link" active-class="active">
				<cog-icon class="icon" />
				<span class="link-title">Inställningar</span>
			</router-link>
		</section>
	</aside>
</template>

<style scoped lang="postcss">
aside {
	@apply fixed z-50 w-[4.5rem] overflow-hidden px-4;
	@apply inset-y-0 flex flex-col space-y-6 bg-white text-gray-800;

	@apply transition-all hover:w-64;
}

.link {
	@apply inline-block rounded-md;
	@apply flex h-10 items-center gap-4;

	@apply transition hover:bg-blue-50;
}

.icon {
	@apply min-h-10 min-w-10 rounded-md p-2;
}

.link-title {
	@apply whitespace-nowrap;
}

.active {
	@apply bg-blue-100 text-blue-500;
}
</style>
