<script setup lang="ts"></script>

<template>
	<aside class="flex min-h-screen min-w-72 flex-col bg-white">
		<div class="flex h-20 items-center py-4 pl-8 pr-4 text-lg font-bold tracking-wider">
			<router-link to="/">
				<span class="text-blue-500">Vanga</span>
				<span>Members</span>
			</router-link>
		</div>

		<div class="space flex flex-grow flex-col space-y-6 p-4">
			<nav>
				<ul>
					<li>
						<router-link to="/dashboard" class="link" active-class="active">
							<span class="material-symbols-rounded">scatter_plot</span>
							<span>Översikt</span>
						</router-link>
					</li>
					<li>
						<router-link to="/member" class="link" active-class="active">
							<span class="material-symbols-rounded">favorite</span>
							<span>Medlemmar</span>
						</router-link>
					</li>
					<li>
						<router-link to="/invoice" class="link" active-class="active">
							<span class="material-symbols-rounded">trending_up</span>
							<span>Fakturering</span>
						</router-link>
					</li>
					<li>
						<router-link to="/membership" class="link" active-class="active">
							<span class="material-symbols-rounded">done</span>
							<span>Medlemskap</span>
						</router-link>
					</li>
					<li>
						<router-link to="/report" class="link" active-class="active">
							<span class="material-symbols-rounded">equalizer</span>
							<span>Rapporter</span>
						</router-link>
					</li>
				</ul>
			</nav>

			<nav>
				<span class="inline-block pb-2 text-sm font-bold text-gray-600">Klubbar</span>
				<ul>
					<li>
						<router-link to="/1" class="link" active-class="active">
							<span
								class="grid aspect-square w-8 place-items-center rounded-md border border-gray-300 text-sm"
							>
								NÄ
							</span>
							<span>Norra Älvsborgs Ryttarklubb</span>
						</router-link>
					</li>
					<li>
						<router-link to="/2" class="link" active-class="active">
							<span
								class="grid aspect-square w-8 place-items-center rounded-md border border-gray-300 text-sm"
							>
								LE
							</span>
							<span>Lilla Edets Ridklubb</span>
						</router-link>
					</li>
				</ul>
			</nav>
		</div>

		<nav class="flex h-16 items-center px-4 py-10">
			<ul class="w-full">
				<li>
					<router-link to="/settings" class="link" active-class="active">
						<span class="material-symbols-rounded">settings</span>
						<span>Inställningar</span>
					</router-link>
				</li>
			</ul>
		</nav>
	</aside>
</template>

<style scoped lang="postcss">
.link {
	@apply flex items-center gap-3;
	@apply rounded-md p-2 text-gray-500;
}

.active {
	@apply bg-blue-50 font-semibold text-blue-500;
}

.material-symbols-rounded {
	@apply rounded-md p-1;
}

.active .material-symbols-rounded {
	/*@apply bg-blue-100;*/
}
</style>
