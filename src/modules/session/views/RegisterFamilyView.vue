<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

function onSubmit() {
	router.push({ name: 'register-addition-view' })
}
</script>

<template>
	<main class="grid min-h-screen place-items-center bg-white">
		<form class="grid w-[1000px] grid-cols-12 gap-x-10" @submit.prevent="onSubmit">
			<section class="col-span-12 mb-12">
				<div class="prose">
					<h1>Lägg till familjemedlem</h1>
					<p>
						Om du inte har några familjemedlemmar eller inte vet vilka familjemedlemmar
						du vill registrera så kan du göra det senare under "Mina sidor".
					</p>
				</div>
			</section>

			<section class="col-span-5 space-y-6">
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
					placeholder="E-postadress"
					autocomplete="email"
				/>

				<button
					type="submit"
					class="w-full rounded-md bg-blue-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
				>
					Lägg till
				</button>
			</section>

			<section class="col-span-7">
				<table>
					<thead>
						<tr>
							<th>Namn</th>
							<th>Personnummer</th>
							<th>E-postadress</th>
							<th></th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>Dennis Fransén</td>
							<td>921116-0123</td>
							<td>dennis.fransen@example.com</td>
							<td>
								<button type="button">
									<span class="material-symbols-rounded">edit</span>
								</button>
								<button type="button">
									<span class="material-symbols-rounded">delete</span>
								</button>
							</td>
						</tr>
						<tr>
							<td>Rickard Fransén</td>
							<td>850229-0123</td>
							<td>rickard.fransen@example.com</td>
							<td>
								<button type="button">
									<span class="material-symbols-rounded">edit</span>
								</button>
								<button type="button">
									<span class="material-symbols-rounded">delete</span>
								</button>
							</td>
						</tr>
					</tbody>
				</table>
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
						class="rounded-md bg-blue-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
					>
						Gå vidare
					</button>
				</div>
			</section>
		</form>
	</main>
</template>
