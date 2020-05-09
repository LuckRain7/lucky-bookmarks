/*
 * @Description:  
 * @Author: LuckRain7
 * @Date: 2020-05-09 21:44:55
 */
// 引入axios | 路径配置

import { AJAX_PATH } from '../config'
import { HTTP_UNLIMITED } from '../axios'

class CategoryHttp extends HTTP_UNLIMITED {
    // 获取导航菜单权限
    getCategory() {
        return this._get(AJAX_PATH.getCategory, {})
    }
}

const a = 11
export { CategoryHttp, a }