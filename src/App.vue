<script setup lang="ts">
import AppHeader from '@/components/AppHeader.vue'
import AppSideMenu from '@/components/AppSideMenu.vue'
</script>

<template>
	<div class="flex">
		<app-side-menu />
		<div class="flex-grow">
			<app-header />
			<router-view />
		</div>
	</div>
</template>
