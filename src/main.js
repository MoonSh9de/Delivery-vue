import './assets/main.css';
import './assets/media.css';

import { createApp } from 'vue';
import cart_store from './cart_store/cart_store';
import App from './App.vue';
import router from './router';

const app = createApp(App)

app.use(router)

app.mount('#app')
