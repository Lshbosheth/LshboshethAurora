<template>
  <div @click="hhhhh">
    111
  </div>
</template>
<script lang="ts" setup>
import { ElMessage } from "element-plus";
import { getVercelAllFile } from '@/service/api'
const hhhhh = async () => {
	// let data = await getVercelAllFile()
	// console.log(data);
	// ElMessage({
	// 	message: 'this is a message.',
	// 	grouping: true,
	// 	type: 'success',
	// })
	if (!("Notification" in window)) {
		// 检查浏览器是否支持通知
		alert("当前浏览器不支持桌面通知");
	} else if (Notification.permission === "granted") {
		// 检查是否已授予通知权限；如果是的话，创建一个通知
		const notification = new Notification('这是通知标题', {
			lang: 'zh-CN',
			requireInteraction: true,
			body: '这是通知内容',
			icon: '/favicon.ico'
		})
	} else if (Notification.permission !== "denied") {
		// 我们需要征求用户的许可
		Notification.requestPermission().then((permission) => {
			if (permission === "granted") {
				const notification = new Notification('这是通知标题', {
					lang: 'zh-CN',
					requireInteraction: true,
					body: '这是通知内容',
					icon: '/favicon.ico'
				})
			}
		});
	}
}
</script>
<style scoped>

</style>
