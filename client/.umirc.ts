/*
 * @Description: umi 配置
 * @Author: LuckRain7
 * @Date: 2020-05-09 12:12:02
 */
import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
    { path: '/login', component: '@/pages/login' },
  ],
  // 添加全局 css 样式
  // cssLoaderOptions: {
  //   localIdentName: '[local]'
  // }

});
