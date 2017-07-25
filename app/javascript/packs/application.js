import Vue from 'vue/dist/vue.esm';
import App from '../app.vue';
import Vuetify from 'vuetify';


import '../app.sass'

Vue.use(Vuetify);

document.addEventListener('DOMContentLoaded', () => {
	const app = new Vue({
		el: '#app',
		template: '<App/>',
		components: {
			App
		}
	});
});
