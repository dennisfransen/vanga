<script setup lang="ts">
const modelValue = defineModel<string>({ required: true })

defineProps<{
	id: string
	label: string
	type: 'text' | 'email' | 'password' | 'tel'
}>()
</script>

<template>
	<FormKit
		:id="id"
		:type="type"
		:label="label"
		v-model="modelValue"
		v-bind="$attrs"
		label-class="block mb-1.5 text-sm text-gray-800"
		inner-class="max-w-md border border-gray-300 rounded-lg mb-1 overflow-hidden focus-within:border-blue-500"
		input-class="w-full px-3.5 py-2 border-none text-gray-800 placeholder-gray-300 text-sm"
		help-class="text-xs text-gray-500"
		messages-class="text-sm text-red-500"
		asterisk-class="text-gray-800"
	/>
</template>
