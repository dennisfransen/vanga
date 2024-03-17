<script lang="ts" setup>
import { computed } from 'vue'
import type { Addition } from '@/typedefs/Addition'

const props = defineProps<{
	addition: Addition
}>()

const priceDescription = computed(() => {
	if (props.addition.type === 'month') {
		return `${props.addition.price} kr/mån i ${props.addition.duration}månader`
	}

	return `${props.addition.price} kr/år`
})
</script>

<template>
	<li>
		<div>
			<label
				:for="`addition-checkbox-${addition.id}`"
				class="flex select-none items-center justify-between rounded-md border px-4 py-6"
			>
				<span>
					<input
						:id="`addition-checkbox-${addition.id}`"
						type="checkbox"
						class="appearance-none rounded-full p-3 checked:bg-blue-500 indeterminate:bg-gray-300"
					/>
					<span class="ml-2">{{ addition.name }}</span>
				</span>
				<span class="flex items-center gap-2">
					<span>{{ priceDescription }}</span>
					<button
						type="button"
						class="grid hidden aspect-square w-8 place-items-center rounded border"
					>
						<span class="material-symbols-rounded text-[16px]"> edit </span>
					</button>
				</span>
			</label>
		</div>
	</li>
</template>
