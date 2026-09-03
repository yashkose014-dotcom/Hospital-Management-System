import axios from 'axios'
const api = axios.create({ baseURL: '/api', headers: { 'Content-Type': 'application/json' } })
api.interceptors.request.use((config) => { const token = localStorage.getItem('medicare_access_token'); if (token) config.headers.Authorization = `Bearer ${token}`; return config })
export const healthApi = () => api.get('/health')
export const authApi = { login: (payload) => api.post('/auth/login', payload), register: (payload) => api.post('/auth/register', payload), status: () => api.get('/auth/status') }
export const appointmentApi = { list: (params) => api.get('/appointments', { params }), create: (payload) => api.post('/appointments', payload), updateStatus: (id, status) => api.patch(`/appointments/${id}/status`, { status }) }
export default api

