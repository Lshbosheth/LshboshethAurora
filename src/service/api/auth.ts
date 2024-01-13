import { request } from '../request';

/**
 * 刷新token
 * @param refreshToken
 */
export function fetchUpdateToken(refreshToken: string) {
	return request.post<ApiAuth.Token>('/auth/refresh', { refreshToken });
}
