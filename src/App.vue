<template>
	<div class="flex">
		<router-view name="LeftSidebar" />

		<div class="flex-grow">
			<router-view name="MainMenu" />
			<router-view />
		</div>
	</div>
</template>
