import '../src/assets/styles/main.css';
import '../src/assets/styles/media.css';
import './assets/styles/_main.scss'
// import './assets/'
import { createApp } from 'vue';
import App from './App.vue';
import router from './router/router';

const app = createApp(App)

app.use(router)

app.mount('#app')
