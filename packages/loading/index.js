import loading from "./src/main.vue";
import { createApp } from "vue";

loading.installed = false;
loading.install = (app) => {
    if (loading.installed) return;
    loading.installed = true;

    app.component(loading.name, loading);
    const plugin = createApp(loading);
    const instance = plugin.mount(document.createElement("div"));
    document.body.appendChild(instance.$el);
    app.config.globalProperties.$loading = {
        show(message = "") {
            instance.show(message);
        },
        hide() {
            instance.hide();
        },
    };
    return instance;
};

export default loading;
