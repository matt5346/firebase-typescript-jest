import Vue from 'vue';
import axios from 'axios';
import Notifications from 'vue-notification';
import { onAuthStateChanged, getAuth } from 'firebase/auth';
import { CombinedVueInstance } from 'vue/types/vue';
import router from './router';
import store from './store';
import App from './App.vue';
import app from './firebase';

Vue.use(Notifications);

Vue.prototype.$axios = axios;
Vue.config.productionTip = false;

let vueApp: CombinedVueInstance<Vue, object, object, object, Record<never, any>>;

const auth = getAuth(app);

onAuthStateChanged(auth, (_user) => {
  if (!vueApp) {
    vueApp = new Vue({
      router,
      store,
      render: (h) => h(App),
    }).$mount('#app');
  }
});
