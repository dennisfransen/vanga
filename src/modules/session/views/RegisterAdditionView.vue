<template>
	<main class="grid min-h-screen place-items-center bg-white">
		<form class="grid w-[1000px] grid-cols-12 gap-x-10" @submit.prevent="onSubmit">
			<section class="col-span-12 mb-12">
				<div class="prose">
					<h1>Välj medlemskap och tillägg</h1>
					<p>
						Om du ännu inte vet vilka tillägg du vill använda så kan du hoppa över detta
						steget och välja det senare under "Mina sidor".
					</p>
				</div>
			</section>

			<section class="col-span-4 space-y-6">
				<h2 class="text-center text-xl font-semibold">Medlemskap</h2>
				<div class="flex min-h-[34rem] flex-col justify-between rounded-md border p-6">
					<ul class="ml-6 list-disc space-y-4">
						<li>
							<div>Medlemsavgift</div>
							<small class="text-gray-600">
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum,
								impedit!
							</small>
						</li>

						<li>
							<div>Olycksfallsförsäkring</div>
							<small class="text-gray-600">
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum,
								impedit!
							</small>
						</li>
						<li>
							<div>Häst och Ryttare</div>
							<small class="text-gray-600">
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum,
								impedit!
							</small>
						</li>
					</ul>

					<div class="space-y-8 text-center">
						<span class="text-xl">600 kr/år</span>

						<div>
							<label for="membership-checkbox" class="select-none">
								<input
									id="membership-checkbox"
									type="checkbox"
									class="appearance-none rounded-full p-3 checked:bg-blue-500 indeterminate:bg-gray-300"
								/>
								<span class="ml-2">Välj medlemskap</span>
							</label>
						</div>
					</div>
				</div>
			</section>

			<section class="col-span-8 space-y-6">
				<h2 class="text-xl font-semibold">Tillval</h2>
				<ul class="space-y-6">
					<AdditionListItem
						:addition="additions[index]"
						v-for="(addition, index) in additions"
						:key="addition.id"
					/>
				</ul>
			</section>

			<section class="col-span-12 mt-10">
				<div class="flex items-center justify-end gap-x-6">
					<router-link
						to="/register/addition"
						class="text-sm font-semibold leading-6 text-gray-900"
					>
						Hoppa över
					</router-link>
					<button
						type="submit"
						class="rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
					>
						Gå vidare
					</button>
				</div>
			</section>
		</form>
	</main>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import AdditionListItem from '@/modules/session/components/AdditionListItem.vue'
import type { Addition } from '@/typedefs/Addition'

const router = useRouter()

const additions = ref<Addition[]>([
	{ id: '1', name: 'Anläggningskort', type: 'month', duration: '12', price: '175' },
	{ id: '2', name: 'Trailer', type: 'month', duration: '12', price: '99' },
	{ id: '3', name: 'Olycksfallsförsäkring+', type: 'year', duration: '1', price: '1200' },
])

function onSubmit() {
	router.push({ name: 'home-index' })
}
</script>
