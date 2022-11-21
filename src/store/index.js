import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  // state: {
  //   PieDiskArray: [],
  //   a: '123',
  // },
  // mutations: {
  //   setPieDisk(state, setPieDisk) {
  //     state.PieDiskArray = setPieDisk;
  //   },
  // },

  state: {
    isActiveMain: true,
    isActiveTable: false,
  },
  mutations: {
    setisActiveMain(state, setIsActive) {
      state.isActiveMain = setIsActive;
    },
  },
});
