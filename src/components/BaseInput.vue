<script setup lang="ts">
defineProps<{
	id: string
	type: 'text' | 'number' | 'email' | 'password' | 'search' | 'tel' | 'url'
	label: string
	required?: boolean
}>()
</script>

<template>
	<div>
		<label :for="id">
			<span>{{ label }}</span>
			<span v-if="required"> * </span>
		</label>
		<div class="mt-2">
			<input :id="id" :name="id" :type="type" v-bind="$attrs" />
		</div>
	</div>
</template>

<style scoped>
label {
	@apply block text-sm font-medium leading-6 text-gray-900;
}

input {
	@apply block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm;
	@apply placeholder:text-gray-400  sm:text-sm sm:leading-6;
	@apply ring-1 ring-inset ring-gray-300;
	@apply focus:ring-2 focus:ring-inset focus:ring-blue-600;
}
</style>
