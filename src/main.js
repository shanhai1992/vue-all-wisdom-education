import Vue from 'vue'
import App from './App'
// import router from './routes/index.js'
import router from './routes'
import {store} from './store'   //引入vuex实例store
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'


Vue.config.productionTip = false
// Vue.use(ElementUi);

Vue.use(ElementUI)

// new Vue({
//   el: '#app',
//   router,
//   store,
//   components: { App },
//   template: '<App/>'
// });

//runtime

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app")

