<template>
  <div @click="hhhhh">111</div>
</template>
<script lang="ts" setup>
import { ElMessage } from "element-plus";

const hhhhh = () => {
	ElMessage({
		message: 'this is a message.',
		grouping: true,
		type: 'success',
	})
}
</script>
<style scoped>

</style>
