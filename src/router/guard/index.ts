import type { Router } from 'vue-router';
import { useTitle } from '@vueuse/core';
import { useNProgress } from '@/hooks';
import { createPermissionGuard } from './permission'

const { start, done } = useNProgress()
/**
 * 路由守卫函数
 * @param router - 路由实例
 */
export function createRouterGuard(router: Router) {
	router.beforeEach(async (to, from, next) => {
		// 开始 loadingBar
		start()
		// 页面跳转权限处理
		await createPermissionGuard(to, from, next);
	});
	router.afterEach(() => {
		// 设置document title
		useTitle('Aurora | Lshbosheth');
		// 结束 loadingBar
		done()
	});
}
