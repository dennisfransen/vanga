<script setup lang="ts">
defineProps<{
	id: string
	label: string
	options: []
	loopKey: string
	optionKey: string
	required?: boolean
	placeholder: string
}>()
</script>

<template>
	<div>
		<label :for="id">
			<span>{{ label }}</span>
			<span> * </span>
		</label>
		<div class="mt-2">
			<select :id="id" :name="id" :required="required" v-bind="$attrs">
				<option :value="null">{{ placeholder }}</option>
				<option
					v-for="(option, index) in options"
					:key="option[loopKey]"
					:value="options[index]"
				>
					{{ option[optionKey] }}
				</option>
			</select>
		</div>
	</div>
</template>

<style scoped lang="postcss">
label {
	@apply block text-sm font-medium leading-6 text-gray-900;
}

select {
	@apply block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm;
	@apply ring-1 ring-inset ring-gray-300;
	@apply focus:ring-2 focus:ring-inset focus:ring-blue-600;
	@apply sm:text-sm sm:leading-6;
}
</style>
