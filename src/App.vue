<script setup lang="ts">
import TheMainMenu from '@/components/TheMainMenu.vue'
import TheHeader from '@/components/TheHeader.vue'
import { ref } from 'vue'

const isLoggedIn = ref(true)
</script>

<template>
	<div class="flex">
		<TheMainMenu v-if="isLoggedIn" />

		<div class="flex-grow">
			<TheHeader v-if="isLoggedIn" />
			<RouterView />
		</div>
	</div>
</template>
