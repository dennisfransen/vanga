<template>
	<main class="grid min-h-screen place-items-center bg-white">
		<form class="grid w-[1000px] grid-cols-2 gap-x-10">
			<section class="col-span-2 mb-12">
				<div class="prose">
					<h2>Lägg till familjemedlem</h2>
					<p>
						Om du inte har några familjemedlemmar eller inte vet vilka familjemedlemmar
						du vill registrera så kan du göra det senare under "Mina sidor".
					</p>
				</div>
			</section>

			<section class="space-y-6">
				<div>
					<label
						for="first-name"
						class="block text-sm font-medium leading-6 text-gray-900"
					>
						Förnamn *
					</label>
					<div class="mt-2">
						<input
							type="text"
							name="first-name"
							id="first-name"
							autocomplete="given-name"
							class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
						/>
					</div>
				</div>

				<div>
					<label
						for="last-name"
						class="block text-sm font-medium leading-6 text-gray-900"
					>
						Efternamn *
					</label>
					<div class="mt-2">
						<input
							type="text"
							name="last-name"
							id="last-name"
							autocomplete="family-name"
							class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
						/>
					</div>
				</div>

				<div>
					<label for="ssn" class="block text-sm font-medium leading-6 text-gray-900">
						Personnummer *
					</label>
					<div class="mt-2">
						<input
							type="text"
							name="ssn"
							id="ssn"
							class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
						/>
					</div>
				</div>

				<div>
					<label for="email" class="block text-sm font-medium leading-6 text-gray-900">
						E-postadress
					</label>
					<div class="mt-2">
						<input
							id="email"
							name="email"
							type="email"
							autocomplete="email"
							class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
						/>
					</div>
				</div>

				<button
					type="submit"
					class="w-full rounded-md bg-blue-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
				>
					Lägg till
				</button>
			</section>

			<section>
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
						class="rounded-md bg-blue-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
					>
						Gå vidare
					</button>
				</div>
			</section>
		</form>
	</main>
</template>

<style scoped>
table {
	width: 100%;
	/*background-color: #feeeee;*/
}

th {
	text-align: start;
}
</style>
<script setup lang="ts"></script>
