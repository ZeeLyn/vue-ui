import alert from "./src/main.vue";
import { createApp } from "vue";
alert.installed = false;
alert.install = (app, opts) => {
    if (alert.installed) return;
    alert.installed = true;

    app.component(alert.name, alert);
    const plugin = createApp(alert, { opts });
    var alias = opts.alias?.alert || "$alert";
    const instance = plugin.mount(document.createElement("div"));
    document.body.appendChild(instance.$el);
    app.config.globalProperties[alias] = function (_opts) {
        return instance.show(_opts);
    };
    return instance;
};

export default alert;
