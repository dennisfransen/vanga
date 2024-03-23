<script setup lang="ts">
import { computed, useAttrs } from 'vue'

defineOptions({ inheritAttrs: false })
const attrs = useAttrs()
const model = defineModel<string>({ required: true })

defineProps<{
	id: string
	type: 'text' | 'number' | 'email' | 'password' | 'search' | 'tel' | 'url'
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
			<input :type="type" v-bind="attrs" v-model="model" />
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

input {
	@apply border-none ring-1 ring-inset ring-gray-300;
	@apply text-sm text-gray-900 placeholder:text-gray-300;
	@apply focus:ring-2 focus:ring-inset focus:ring-blue-500;
	@apply block w-full max-w-md rounded-md bg-white px-3.5 py-1.5;
}

input:disabled,
input:read-only {
	@apply bg-gray-200 placeholder:text-gray-400;
}

input:read-only {
	@apply focus:ring-1 focus:ring-gray-300;
}

input:disabled {
	@apply cursor-not-allowed;
}
</style>
