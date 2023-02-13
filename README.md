# vue-ui

## Project setup

```ps1
npm install @zeelyn/vue-ui
```

## Usage
Modify main.js
```javascript

import VueUI from "@zeelyn/vue-ui";
import "@zeelyn/vue-ui/dist/index.css";
const app = createApp(App);
app.use(VueUI,{
    theme:"dark",//or light
    minWidth:100,
    maxWidth:300
});
```

```javascript
this.$loading.show();
this.$loading.hide();
this.$alert({
            title: "this is title",
            message: "this is content",
            showCancel: true,
            confirmText: "OK",
            cancelText: "Cancel",
            confirmColor: "#fff",
            cancelColor: "#ff0000",
            onConfirm: () => {
                console.warn("click ok");
            },
            onCancel: () => {
                console.warn("click cancel");
            },
        })
            .then(() => {
                console.log("confirm");
            })
            .catch(() => {
                console.log("cancel");
            });
this.$alert("This is message");
this.$toast.show({
                    message: "This is toast content!",
                    icon: "success",
                })
                .then(() => {
                    console.log("toast closed");
                });
this.$toast.success("This is message!");
this.$toast.error("This is message!");
this.$toast.warning("This is message!");
this.$toast.info("This is message!");
```