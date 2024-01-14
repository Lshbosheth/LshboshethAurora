import { request } from '../request';

export function getQiniuAllFile() {
	return request.get('/api/files/qiniuFiles', {});
}

export function getVercelAllFile() {
	return request.get('/api/files/vercelFiles', {});
}
