import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'

import HelloWorld from './components/HelloWorld.vue'
// const Home = { template: '<div>Home</div>' }
// const About = { template: '<div>About</div>' }

const routes = [
  //{ path: '/', component: Home },
  { path: '/hello', component: HelloWorld },
];

const router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHashHistory(),
  routes, // `routes: routes` 的缩写
})

const vueApp = createApp(App);
vueApp.use(router);
vueApp.mount('#app');
