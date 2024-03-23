<script setup lang="ts">
import { ref } from 'vue'

const textVariable = ref<string>('')
const selectVariable = ref<string>('')
</script>

<template>
	<main class="space-y-4">
		<div class="prose">
			<h2>This is an home index</h2>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet expedita libero
				nulla numquam voluptates. Aperiam cum eaque labore maxime nihil pariatur reiciendis.
				At ducimus ea ex, expedita neque obcaecati sequi?
			</p>
		</div>

		<form>
			<div class="space-y-4">
				<BaseInput
					id="text-test"
					label="Text Test"
					type="text"
					v-model="textVariable"
					placeholder="Placeholder"
				/>

				<BaseSelect
					id="select-test"
					label="Select Test"
					v-model="selectVariable"
					placeholder="Placeholder"
				/>

				<button type="submit">Submit</button>
			</div>
		</form>
	</main>
</template>
