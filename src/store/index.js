import Vue from 'vue';
import Vuex from 'vuex';

import welcome from './welcome/welcome';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    Welcome: welcome,
  },
});
