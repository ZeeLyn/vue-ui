import mask from "./src/main.vue";
// import { createApp } from "vue";

mask.installed = false;
mask.install = (app) => {
    if (mask.installed) return;
    mask.installed = true;
    app.component(mask.name, mask);
};

export default mask;
