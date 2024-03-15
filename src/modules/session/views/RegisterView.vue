<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

type Sport = {
	id: string
	name: string
}

type Club = {
	id: string
	name: string
	slug: string
}

const sportOptions = ref<Sport[]>([
	{ id: '1', name: 'Ridsport' },
	{ id: '2', name: 'Fotboll' },
	{ id: '3', name: 'Hockey' },
])

const clubOptions = ref<Club[]>([
	{ id: '1', name: 'Norra Älvsborgs Ryttarklubb', slug: 'NÄRK' },
	{ id: '2', name: 'Lilla Edet Ridskola', slug: 'LERK' },
])

function onSubmit() {
	router.push({ name: 'register-family-view' })
}
</script>

<template>
	<main class="grid min-h-screen place-items-center bg-white">
		<form class="grid w-[1000px] grid-cols-2 gap-x-10" @submit.prevent="onSubmit">
			<section class="space-y-6">
				<div class="prose">
					<h2>Kul att du vill bli en av oss!</h2>
					<p>
						Fyll i formuläret för att välja medlemskap och bli en del av ridsporten på
						nolltid.
					</p>
				</div>

				<img src="@/assets/register-art.svg" alt="Abstrakta föremål" width="80%" />
			</section>

			<section class="space-y-6">
				<BaseSelect
					id="sport"
					loop-key="id"
					option-key="name"
					:options="sportOptions"
					label="Idrott"
					placeholder="Välj idrott"
					required
				/>
				<BaseSelect
					id="club"
					loop-key="id"
					option-key="name"
					:options="clubOptions"
					label="Klubb"
					placeholder="Välj klubb"
					required
				/>
				<BaseInput
					id="first-name"
					type="text"
					label="Förnamn"
					required
					placeholder="Förnamn"
					autocomplete="given-name"
				/>
				<BaseInput
					id="last-name"
					type="text"
					label="Efternamn"
					required
					placeholder="Efternamn"
					autocomplete="family-name"
				/>
				<BaseInput
					id="ssn"
					type="text"
					label="Personnummer"
					placeholder="Personnummer"
					required
				/>
				<BaseInput
					id="email"
					type="email"
					label="E-postadress"
					required
					placeholder="E-postadress"
					autocomplete="email"
				/>
			</section>

			<section class="col-span-2 mt-10">
				<div class="flex items-center justify-end gap-x-6">
					<button
						type="submit"
						class="rounded-md bg-blue-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
					>
						Gå vidare
					</button>
				</div>
			</section>
		</form>
	</main>
</template>
