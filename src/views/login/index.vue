<template>
  <div @click="hhhhh">
    111
  </div>
</template>
<script lang="ts" setup>
import { ElMessage } from "element-plus";
import { getVercelAllFile } from '@/service/api'
const hhhhh = async () => {
	let data = await getVercelAllFile()
	console.log(data);
	ElMessage({
		message: 'this is a message.',
		grouping: true,
		type: 'success',
	})
}
</script>
<style scoped>

</style>
