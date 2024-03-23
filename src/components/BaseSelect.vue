<script setup lang="ts">
import { computed, useAttrs } from 'vue'

defineOptions({ inheritAttrs: false })
const attrs = useAttrs()
const model = defineModel<string>({ required: true })

defineProps<{
	id: string
	label: string
}>()

const isRequired = computed(() => {
	return attrs.required === '' || attrs.required === true
})
</script>

<template>
	<div>
		<label :for="id">
			<span>{{ label }}</span>
			<span v-if="isRequired"> * </span>
		</label>
		<div class="inner">
			<select
				v-bind="attrs"
				v-model="model"
				:class="model === '' ? 'text-gray-300' : 'text-gray-800'"
			>
				<option value="" :disabled="isRequired" selected>{{ attrs.placeholder }}</option>
				<option value="option-1">Option 1</option>
				<option value="option-2">Option 2</option>
			</select>
		</div>
	</div>
</template>

<style scoped lang="postcss">
label {
	@apply block text-sm text-gray-800;
}

.inner {
	@apply mt-1.5;
}

select {
	@apply text-sm placeholder:text-gray-300;
	@apply border-0 ring-1 ring-inset ring-gray-300;
	@apply focus:ring-2 focus:ring-inset focus:ring-blue-500;
	@apply block w-full max-w-md rounded-md bg-white px-3.5 py-1.5;
}

select:disabled {
	@apply cursor-not-allowed bg-gray-200 text-gray-400;
}

option {
	@apply text-gray-800;
}

select:is(:required) option:disabled {
	@apply hidden;
}
</style>
