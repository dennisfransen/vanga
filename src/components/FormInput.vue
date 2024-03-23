<script setup lang="ts">
const modelValue = defineModel<string>({ required: true })

defineProps<{
	id: string
	label: string
	type: 'text' | 'email' | 'password' | 'tel'
}>()
</script>

<template>
	<FormKit :id="id" :type="type" :label="label" v-model="modelValue" v-bind="$attrs" />
</template>
