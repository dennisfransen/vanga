<script setup lang="ts">
import { MagnifyingGlassIcon } from '@heroicons/vue/24/outline'
</script>

<template>
	<header class="border-b bg-white">
		<div class="flex h-[4.5rem] items-center justify-between pl-4 pr-8">
			<div class="relative flex-grow">
				<label for="search" class="hidden">Sök</label>
				<input
					type="search"
					placeholder="Sök e-post, namn, medlemsnr eller fakturanr......"
					class="w-full border-none pl-10"
				/>
				<magnifying-glass-icon class="absolute left-0 top-1/2 h-6 w-6 -translate-y-1/2" />
			</div>
		</div>
	</header>
</template>
