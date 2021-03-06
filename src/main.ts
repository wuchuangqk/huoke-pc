import { createApp } from 'vue'
import App from './App.vue'
import './styles/index.scss'; // 样式入口
import { router } from '@/routes';
import ElementPlus from 'element-plus'
import locale from "element-plus/lib/locale/lang/zh-cn";
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import Swiper, { Pagination } from "swiper";
import NProgress from 'nprogress'
import { createPinia } from 'pinia'

NProgress.configure({ parent: 'body' });

Swiper.use([Pagination]);
const app = createApp(App)
const pinia = createPinia()

/* -------- 安装模块 start -------- */
// 安装路由模块
app.use(router)
// 安装UI库
app.use(ElementPlus, { locale })
// 安装状态管理
app.use(pinia)
/* -------- 安装模块 end ---------- */

/* -------- 注册全局组件 start -------- */
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
/* -------- 注册全局组件 end -------- */

app.mount('#app')
