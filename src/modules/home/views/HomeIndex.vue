<script setup lang="ts">
import { ref } from 'vue'

const test = ref('')
</script>

<template>
	<main class="space-y-10">
		<div class="prose">
			<h2>This is an home index</h2>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet expedita libero
				nulla numquam voluptates. Aperiam cum eaque labore maxime nihil pariatur reiciendis.
				At ducimus ea ex, expedita neque obcaecati sequi?
			</p>
		</div>

		<FormKit type="form">
			<div class="space-y-4">
				<FormInput
					id="firstname"
					label="Förnamn"
					type="text"
					v-model="test"
					placeholder="Placeholder..."
					validation="required|not:Admin"
				/>

				<FormInput
					id="firstname"
					label="Förnamn"
					type="text"
					v-model="test"
					placeholder="Placeholder..."
					validation="required|not:Admin"
				/>

				<FormInput
					id="firstname"
					label="Förnamn"
					type="text"
					v-model="test"
					placeholder="Placeholder..."
					validation="required|not:Admin"
					help="Lägg till ditt förnamn"
				/>

				<FormKit
					type="select"
					label="Class"
					name="class"
					id="class"
					placeholder="Select a class"
					:options="['Warrior', 'Mage', 'Assassin']"
					validation="required"
					help="Lägg till ditt förnamn"
				/>

				<FormKit
					type="submit"
					label="Checkout my label"
					help="You can use the label prop."
				/>
			</div>
		</FormKit>
	</main>
</template>
