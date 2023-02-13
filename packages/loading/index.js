import loading from "./src/main.vue";
import { createApp } from "vue";

loading.installed = false;
loading.install = (app, opts) => {
    if (loading.installed) return;
    loading.installed = true;
    app.component(loading.name, loading);

    const plugin = createApp(loading, {
        opts,
    });
    var alias = opts.alias?.loading || "$loading";
    const instance = plugin.mount(document.createElement("div"));
    document.body.appendChild(instance.$el);
    app.config.globalProperties[alias] = {
        show(message = "loading", _opts = null) {
            instance.show(message, _opts);
        },
        hide() {
            instance.hide();
        },
    };
    return instance;
};

export default loading;
