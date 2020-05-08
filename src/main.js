import Vue from 'vue'
import App from './App.vue'
import Slider from './components/Slider';
import Home from './components/Home';


// le view router est un plug in donc il faut l'importer ici après avoir fait la commande npm install vue-router

import VueRouter from 'vue-router' //1

Vue.use(VueRouter); //2

Vue.config.productionTip = false

// 3 les routes
// we can use this : const var = {/path}

const router = new VueRouter({
  routes: [
    {path: '/', component: Home},
    {path:'/Projets', component: Slider},
  ],
  mode: 'history' //Si on l'utilise dans le lien il y aura pas de #
})

// Dans la view instance on lui dit 
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')





//https://www.youtube.com/watch?v=nnVVOe7qdeQ
