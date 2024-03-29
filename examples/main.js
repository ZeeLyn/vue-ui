import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import vueUI from "../packages/index";
// console.log(vueUI);
const app = createApp(App);
app.use(vueUI, {
    // theme: "light",
    // maxWidth: "70%",
    // minWidth: "50%",
});
app.use(router).mount("#app");
