<template>
	<header class="border-b bg-white">
		<div class="flex h-20 items-center justify-between pl-4 pr-8">
			<div class="relative">
				<label for="search" class="hidden">Sök</label>
				<input type="search" placeholder="Sök..." class="w-full border-none pl-10" />
				<span
					class="material-symbols-rounded absolute left-0 top-1/2 -translate-y-1/2 text-gray-400"
				>
					search
				</span>
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
