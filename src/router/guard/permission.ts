import type { NavigationGuardNext, RouteLocationNormalized } from 'vue-router';

/** 处理路由页面的权限 */
export async function createPermissionGuard(
	to: RouteLocationNormalized,
	from: RouteLocationNormalized,
	next: NavigationGuardNext
) {
	console.log(to);
	console.log(from);
	next();
}
