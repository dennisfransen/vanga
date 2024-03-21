<script setup lang="ts">
import AppHeader from '@/components/AppHeader.vue'
import AppSideMenu from '@/components/AppSideMenu.vue'
</script>

<template>
	<app-side-menu />

	<div class="relative left-[4.5rem]">
		<app-header />
		<router-view />
	</div>
</template>
