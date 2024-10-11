// import { createApp } from 'vue'
// import App from './App.vue'
// import router from './router'
// import vuetify from './plugins/vuetify'
// import { loadFonts } from './plugins/webfontloader'
//
// loadFonts()
//
// createApp(App)
//   .use(router)
//   .use(vuetify)
//   .mount('#app')


// import '@mdi/font/css/materialdesignicons.css'; // Для Material Design Icons
// import 'vuetify/styles'; // Стили для Vuetify
// import { createVuetify } from 'vuetify'; // Правильный импорт Vuetify
//
// const vuetify = createVuetify({
//     icons: {
//         iconfont: 'mdi', // Указываем использование Material Design Icons
//     },
// });
//
// export default vuetify;


import { createApp } from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify'; // Убедитесь, что путь верный
// import { createRouter, createWebHistory } from 'vue-router';
// import routes from './router';
import router from "./router"; // Проверьте правильный путь к вашему маршрутизатору

const app = createApp(App);

app.use(vuetify);
app.use(router);
// app.use(createRouter({
//     history: createWebHistory(),
//     routes,
// }));

app.mount('#app');