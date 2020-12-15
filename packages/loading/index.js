import loading from "./src/main.vue";

loading.install = (Vue) => {
    Vue.component(loading.name, loading);
}

export default loading;