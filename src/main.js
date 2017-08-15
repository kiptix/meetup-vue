import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App'
import * as firebase from 'firebase'
import router from './router'
import { store } from './store'
import DateFilter from './filters/date'
import AlertCmp from './components/Shared/Alert.vue'

Vue.use(Vuetify)
Vue.config.productionTip = false

Vue.filter('date', DateFilter)
Vue.component('app-alert', AlertCmp)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),

  created () {
    firebase.initializeApp({
      apiKey: 'AIzaSyD24SlAbrR1WX0TcV7feCd74EocQjimnP8',
      authDomain: 'meetup-vue.firebaseapp.com',
      databaseURL: 'https://meetup-vue.firebaseio.com',
      projectId: 'meetup-vue',
      storageBucket: 'meetup-vue.appspot.com'
    })
  }
})
