/*
 * @Description:  
 * @Author: LuckRain7
 * @Date: 2020-05-09 21:42:07
 */

//  环境变量
const ENV = process.env.NODE_ENV

//  ajax 请求路径 ↓

const BASE_URL =
    ENV === 'development' ? 'http://localhost:7778' : 'http://xxx.xxx.xxx.xxx:xxxx/xxx'

const ADMIN_URL = '/api/admin'

const AJAX_PATH = {
    getCategory: BASE_URL + ADMIN_URL + '/category', // 获取类型列表
}

//  ajax 请求路径 ↑

export { BASE_URL, AJAX_PATH }