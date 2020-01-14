import axios from 'axios'
// 倒入库
export function request(config) {
	// 创建实例
	const instance = axios.create({
		baseURL:'http://123.207.32.32:8000',
		timeout:5000
	})
	// 创建拦截器
	instance.interceptors.request.use(config => {
		return config
	}, err => {
    // console.log(err);
	})
	
	// 调用拦截器数据
	instance.interceptors.response.use(res => {
		return res.data
	},err=>{
		console.log(err);
	})
	
	return instance(config)
}