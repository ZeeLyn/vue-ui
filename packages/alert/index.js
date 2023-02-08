import alert from "./src/main.vue";
import { createApp } from "vue";
alert.installed = false;
alert.install = (app) => {
    if (alert.installed) return;
    alert.installed = true;

    app.component(alert.name, alert);
    const plugin = createApp(alert);
    const instance = plugin.mount(document.createElement("div"));
    document.body.appendChild(instance.$el);
    app.config.globalProperties.$alert = function (opts) {
        return instance.show(opts);
    };
    return instance;
};

export default alert;
