<template>
  <div @click="hhhhh">
    111
  </div>
</template>
<script lang="ts" setup>
import { ElMessage } from "element-plus";
import { useNProgress } from "@/hooks";

const { start, done } = useNProgress()
const hhhhh = () => {
	start()
	setTimeout(() => {
		done()
	}, 1000)
	ElMessage({
		message: 'this is a message.',
		grouping: true,
		type: 'success',
	})
}
</script>
<style scoped>

</style>
