/* eslint no-console: 0 */
// Run this example by adding <%= javascript_pack_tag 'hello_vue' %> and
// <%= stylesheet_pack_tag 'hello_vue' %> to the head of your layout file,
// like app/views/layouts/application.html.erb.
// All it does is render <div>Hello Vue</div> at the bottom of the page.

import Vue from 'vue'
import App from '../app.vue'
import router from '../app/router'
import VueResource from 'vue-resource'
import store from '../app/store'
import elementui from '../app/elementui'
import Vuex from 'vuex'
import VueApollo from 'vue-apollo'
import apolloClient from 'app/api'
import VueLazyLoad from 'vue-lazyload'
import VueTouch from 'vue-touch'
import VueScrollTo from 'vue-scrollto'
import VueMoment from 'vue-moment'

// import "leaflet/dist/leaflet.css"
import "vue-image-lightbox/dist/vue-image-lightbox.min.css"

Vue.use(VueResource)
Vue.use(VueApollo)
Vue.use(VueLazyLoad)
Vue.use(VueTouch, { name: 'v-touch' })
Vue.use(VueScrollTo)
Vue.use(VueMoment)

document.addEventListener('DOMContentLoaded', () => {
  const node  = document.getElementById('app')
  const props = JSON.parse(node.getAttribute('data'))

  store.dispatch('setCurrentUser', props.user)

  const apolloProvider = new VueApollo({
    defaultClient: apolloClient
  })

  const app = new Vue({
    router,
    store,
    apolloProvider,
    render: h => h(App, { props })
  }).$mount(node)
})
