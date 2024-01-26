import { request } from '../request';

/**
 * 刷新token
 * @param refreshToken
 */
export function fetchUpdateToken(refreshToken: string) {
	return request.post<ApiAuth.Token>('/api/auth/refresh', { refreshToken });
}

export function login(data: any) {
	return request.post('/api/auth/login', data );
}
