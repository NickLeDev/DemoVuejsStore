import { createStore } from 'vuex';
import simple from './simple/index';


export const store = createStore({
  modules: {
    simple,
  }
})