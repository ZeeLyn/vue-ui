import alert from "./src/main.vue";

alert.install = (Vue) => {
    Vue.component(alert.name, alert);
}

export default alert;