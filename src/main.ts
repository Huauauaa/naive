import { createApp } from 'vue';
import App from './App.vue';
import 'vfonts/Lato.css';
// Monospace Font
import 'vfonts/FiraCode.css';
import UI from 'naive-ui';

const app = createApp(App);

app.use(UI);

app.mount('#app');
