import toast from "./src/main.vue";
import { createApp } from "vue";
toast.installed = false;
toast.install = (app, opts) => {
    if (toast.installed) return;
    toast.installed = true;

    app.component(toast.name, toast);
    const plugin = createApp(toast, { opts });
    const instance = plugin.mount(document.createElement("div"));
    document.body.appendChild(instance.$el);
    app.config.globalProperties.$toast = {
        show(_opts) {
            return instance.show(_opts);
        },
        info(message, duration = 3000) {
            return instance.show({
                message: message,
                duration: duration,
            });
        },
        success(message, duration = 3000) {
            return instance.show({
                message: message,
                icon: "success",
                duration: duration,
            });
        },
        error(message, duration = 3000) {
            return instance.show({
                message: message,
                icon: "error",
                duration: duration,
            });
        },
        warning(message, duration = 3000) {
            return instance.show({
                message: message,
                icon: "warning",
                duration: duration,
            });
        },
    };
    return instance;
};

export default toast;
