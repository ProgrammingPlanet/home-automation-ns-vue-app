import Vue from 'nativescript-vue';

import routes from "./routes";

// Uncommment the following to see NativeScript-Vue output logs
// Vue.config.silent = false;

//custom goto function to switch components
Vue.prototype.$goto = function (to, customOptions) {

    var defaultOptions = {
        clearHistory: false,
        backstackVisible: true,
        transition: {
            name: "slide",
            duration: 200,
            curve: "easeIn"
        }
    }

    Object.assign(defaultOptions, customOptions)  //recursivly merge custom options in default options, priority to custome
    this.$navigateTo(routes[to], defaultOptions)
}


new Vue({
    render: h => h('frame', [h(routes.main)])
}).$start();