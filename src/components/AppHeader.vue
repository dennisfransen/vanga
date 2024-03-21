<script setup lang="ts">
import { MagnifyingGlassIcon } from '@heroicons/vue/24/outline'
</script>

<template>
	<header class="bg-white shadow-sm">
		<div class="flex h-[4.5rem] items-center justify-between px-4">
			<div class="relative flex-grow">
				<label for="search" class="hidden">Sök</label>
				<input
					type="search"
					class="w-full rounded-md border-none pl-10 text-sm placeholder:text-gray-500"
					placeholder="Sök e-post, förnamn, efternamn, medlemsnummer eller fakturanummer..."
				/>
				<magnifying-glass-icon
					class="absolute left-2 top-1/2 h-6 w-6 -translate-y-1/2 text-gray-500"
				/>
			</div>
		</div>
	</header>
</template>
