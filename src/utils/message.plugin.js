export default {
  install(Vue) {
    Vue.prototype.$message = function(text) {
      // eslint-disable-next-line no-undef
      M.toast({ html: text, classes: "green" });
    };

    Vue.prototype.$error = function(text) {
      // eslint-disable-next-line no-undef
      M.toast({ html: `[Ошыбка]: ${text}`, classes: "red" });
    };
  }
};
