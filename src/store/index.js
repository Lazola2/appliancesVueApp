import { createStore } from "vuex";

export default createStore({
  state: {
    appliances: []
  },
  getters: {
    appliances(state) {
      return state.appliances;
    },
  },
  mutations: {
    setAppliances(state, appliances){
      state.appliances = appliances;
      console.log(appliances);
    }
  },
  actions: {
    async fetchAppliances(context) {
      try {
        const res = await fetch('https://lazola2.github.io/appliancesAPI/randomAppliances.json');
        const data = await res.json();
        context.commit('setAppliances', data.appliances);
        // setAppliances(state, data)
        // console.log(data);
      } catch (err) {
        console.error(err);
      }
    }
  },
  modules: {},
});
