<template>
	<header class="border-b bg-white shadow-sm">
		<div class="flex h-16 items-center justify-between px-6">
			<router-link to="/" class="text-lg font-bold tracking-wide">
				<span class="text-blue-400">Moon</span>
				<span class="text-gray-500">Members</span>
			</router-link>

			<nav class="flex items-center gap-6">
				<router-link to="/">
					<span>Hem</span>
				</router-link>
				<router-link to="/about">
					<span>Om oss</span>
				</router-link>
				<router-link to="/login">
					<span>Logga in</span>
				</router-link>
				<router-link to="/register">
					<span>Bli medlem</span>
				</router-link>
			</nav>
		</div>
	</header>

	<div id="app-container">
		<aside class="flex min-w-72 flex-col justify-between bg-white px-4 py-4 shadow">
			<nav class="grid gap-4">
				<router-link to="/profile" class="nav-link" exact-active-class="nav-link-active">
					<span class="material-symbols-rounded">favorite</span>
					<span>Mina sidor</span>
				</router-link>
				<router-link to="/member" class="nav-link" exact-active-class="nav-link-active">
					<span class="material-symbols-rounded">group</span>
					<span>Medlemmar</span>
				</router-link>
				<router-link to="/invoice" class="nav-link" exact-active-class="nav-link-active">
					<span class="material-symbols-rounded">credit_card</span>
					<span>Fakturering</span>
				</router-link>
				<router-link to="/package" class="nav-link" exact-active-class="nav-link-active">
					<span class="material-symbols-rounded">inventory_2</span>
					<span>Våra Paket</span>
				</router-link>
			</nav>

			<div class="flex flex-col gap-6">
				<hr />
				<router-link to="/setting" class="nav-link" exact-active-class="nav-link-active">
					<span class="material-symbols-rounded">settings</span>
					<span>Inställningar</span>
				</router-link>

				<span class="text-gray-400">
					Sidetti AB
					{{ new Date().getFullYear() }}
				</span>
			</div>
		</aside>

		<div class="flex-grow">
			<RouterView />
		</div>
	</div>
</template>

<style scoped>
.nav-link {
	@apply flex items-center gap-3;
	@apply rounded-md p-2;
}

.nav-link-active {
	@apply bg-blue-50;
}

.material-symbols-rounded {
	@apply rounded p-1 shadow;
}

.nav-link-active .material-symbols-rounded {
	@apply bg-blue-200;
}
</style>
