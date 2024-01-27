<template>
	<el-form :model="model" label-width="120px">
		<el-form-item label="用户名">
			<el-input v-model="model.username" />
		</el-form-item>
		<el-form-item label="密码">
			<el-input v-model="model.password" />
		</el-form-item>
		<el-form-item label="验证码">
			<el-input v-model="model.captcha">
        <template #suffix>
					<img :src="CaptchaUrl" @click="getCaptchaUrl" class="captcha_img" alt="">
        </template>
			</el-input>
		</el-form-item>
		<el-form-item>
			<el-button type="primary" @click="handleSubmit">登录</el-button>
		</el-form-item>
	</el-form>
</template>
<script lang="ts" setup>
import { reactive, onMounted, ref, toRaw } from "vue";
import { login } from '@/service/api'
interface FormModel {
	username: string;
	password: string;
	captcha: string;
}
const CaptchaUrl = ref('')
const model: FormModel = reactive({
	username: 'lshbosheth',
	password: '123456',
	captcha: ''
});
const handleSubmit = () => {
	login(toRaw(model)).then(res => {
		console.log(res)
	})
}
const getCaptchaUrl = ()=> {
	CaptchaUrl.value = `${import.meta.env.VITE_BASE_URL}/api/utils/captcha?key=${Math.random()}`
}
onMounted(() => {
	getCaptchaUrl()
})
</script>
<style scoped>

</style>
