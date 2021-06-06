import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

/* Icon fonts */
import "./assets/fonts/ionicons.css";
import "./assets/fonts/linearicons.css";
import "./assets/fonts/open-iconic.css";
import "./assets/fonts/pe-icon-7-stroke.css";
import "./assets/fonts/feather.css";
/* Core stylesheets */
import "./assets/css/bootstrap-material.css";
import "./assets/css/shreerang-material.css";
import "./assets/css/uikit.css";
/* Libs */
import "./assets/libs/perfect-scrollbar/perfect-scrollbar.css";


createApp(App).use(router).mount('#app')
