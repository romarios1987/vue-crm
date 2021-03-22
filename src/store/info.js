import firebase from "firebase/app";

export default {
  actions: {
    async fetchInfo({ commit, dispatch }) {
      try {
        const uid = await dispatch("getUid");
        const info = (
          await firebase
            .database()
            .ref(`/users/${uid}/info/`)
            .once("value")
        ).val();
        commit("setInfo", info);
      } catch (e) {
        console.log(e);
      }
    }
  },
  mutations: {
    setInfo: (state, info) => (state.info = info),
    clearInfo: state => (state.info = {})
  },
  state: {
    info: {}
  },
  getters: {
    getInfo: state => state.info
  }
};
