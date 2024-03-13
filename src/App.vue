<script setup lang="ts">
import TheMainMenu from '@/components/TheMainMenu.vue'
import TheHeader from '@/components/TheHeader.vue'
</script>

<template>
	<div class="flex">
		<TheMainMenu />

		<div class="flex-grow">
			<TheHeader />
			<RouterView />
		</div>
	</div>
</template>
