<script setup lang="ts">
import { MagnifyingGlassIcon } from '@heroicons/vue/24/outline'
</script>

<template>
	<header class="border-b bg-white">
		<div class="flex h-20 items-center justify-between pl-4 pr-8">
			<div class="relative">
				<label for="search" class="hidden">Sök</label>
				<input type="search" placeholder="Sök..." class="w-full border-none pl-10" />
				<magnifying-glass-icon
					class="container absolute left-0 top-1/2 h-6 w-6 -translate-y-1/2 bg-red-500 text-gray-400"
				/>
			</div>

			<nav class="flex items-center gap-6">
				<router-link
					to="/register"
					class="flex items-center gap-1 rounded-md bg-blue-100 py-2 pl-5 pr-3 font-semibold text-blue-500"
				>
					<span>Logga in</span>
					<span class="material-symbols-rounded">chevron_right</span>
				</router-link>
			</nav>
		</div>
	</header>
</template>
