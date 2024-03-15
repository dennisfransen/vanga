<template>
	<main class="grid min-h-screen place-items-center bg-white">
		<form class="grid w-[1000px] grid-cols-2 gap-x-10" @submit.prevent="onSubmit">
			<section class="col-span-2 mb-12">
				<div class="prose">
					<h2>Välj medlemskap och tillägg</h2>
					<p>
						Om du ännu inte vet vilka tillägg du vill använda så kan du hoppa över detta
						steget och välja det senare under "Mina sidor".
					</p>
				</div>
			</section>

			<section class="space-y-6"></section>

			<section></section>

			<section class="col-span-2 mt-10">
				<div class="flex items-center justify-end gap-x-6">
					<router-link
						to="/register/addition"
						class="text-sm font-semibold leading-6 text-gray-900"
					>
						Hoppa över
					</router-link>
					<button
						type="submit"
						class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
					>
						Gå vidare
					</button>
				</div>
			</section>
		</form>
	</main>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()

function onSubmit() {
	router.push({ name: 'home-index' })
}
</script>
