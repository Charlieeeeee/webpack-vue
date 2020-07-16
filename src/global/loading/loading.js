import Vue from 'vue';

const AlertConstructor = Vue.extend(require('./loading.vue').default);

const AlertInstance = new AlertConstructor({
  el: document.createElement('div')
});
AlertConstructor.prototype.close = function(event) {
  AlertInstance.$el.parentNode && AlertInstance.$el.parentNode.removeChild(AlertInstance.$el);
};
const Loading = {
  open: function(option) {
    const instance = AlertInstance;
    if (option) {
      instance.showLoading = option.showLoading;
      instance.showModal = option.showModal;
    }
    document.body.appendChild(instance.$el);
    return instance;
  },
  close: function() {
    AlertInstance.close();
  }
};

export default Loading;
