<template>
    <div class="home">
        <div class="row">
            <span>Theme:</span>
            <label><input type="radio" name="theme" value="dark" v-model="theme" />Dark </label>
            <label><input type="radio" name="theme" value="light" v-model="theme" />Light </label>
        </div>
        <div class="row"><span>Min Width: </span><input type="range" min="1" max="300" v-model="minWidth" step="1" />{{ minWidth }}</div>
        <div class="row"><span>Max Width:</span> <input type="range" min="1" max="300" v-model="maxWidth" step="1" />{{ maxWidth }}</div>
        <h1>Loading</h1>
        <div class="row"><span>Loading text: </span><input type="text" v-model="loading.message" /></div>
        <div class="row"><span>Radius:</span> <input type="range" min="1" max="300" v-model="loading.radius" step="1" />{{ loading.radius }}</div>
        <div class="row"><span>Width: </span><input type="range" min="1" max="300" v-model="loading.width" step="1" />{{ loading.width }}</div>
        <div class="row"><span>Show mask: </span><input type="checkbox" v-model="loading.mask" /></div>
        <button @click="showLoading">Show loading</button>
        <h1>Alert</h1>
        <div class="row"><span>Title: </span><input type="text" v-model="alert.title" /></div>
        <div class="row"><span>Message: </span><input type="text" v-model="alert.message" /></div>
        <div class="row"><span>Width: </span><input type="range" min="1" max="300" v-model="alert.width" step="1" />{{ alert.width }}</div>

        <div class="row"><span>Confirm Button Text: </span><input type="text" v-model="alert.confirmText" /></div>
        <div class="row"><span>Cancel Button Text: </span><input type="text" v-model="alert.cancelText" /></div>
        <div class="row"><span>Confirm Button Color: </span><input type="color" v-model="alert.confirmColor" /></div>
        <div class="row"><span>Cancel Button Color: </span><input type="color" v-model="alert.cancelColor" /></div>
        <div class="row"><span>Show mask: </span><input type="checkbox" v-model="alert.mask" /></div>
        <button @click="showDialog">Show alert</button>

        <h1>Toast</h1>
        <div class="row"><span>Message: </span><input type="text" v-model="toast.message" /></div>
        <div class="row"><span>Width: </span><input type="range" min="1" max="300" v-model="toast.width" step="1" />{{ toast.width }}</div>
        <div class="row"><span>Duration: </span><input type="range" min="1000" max="100000" v-model="toast.duration" step="1" />{{ toast.duration }}</div>
        <div class="row">
            <span>Type:</span>
            <label><input type="radio" name="type" value="" v-model="toast.type" />None </label>
            <label><input type="radio" name="type" value="success" v-model="toast.type" />Success </label>
            <label><input type="radio" name="type" value="warning" v-model="toast.type" />Warning </label>
            <label><input type="radio" name="type" value="error" v-model="toast.type" />Error </label>
        </div>
        <div class="row"><span>Show mask: </span><input type="checkbox" v-model="toast.mask" /></div>
        <button @click="showToast()">Show toast</button>
        <button @click="showToast(require('../assets/error.png'))">Show custom image toast</button>

        <h1>Mask</h1>
        <button @click="showMask = true">Show Mask</button>
        <vue-ui-mask v-if="showMask">
            <div class="mask">
                <h1>Title</h1>
                <p>This is content!</p>
            </div>
        </vue-ui-mask>
    </div>
</template>

<script>
// @ is an alias to /src
// import { getCurrentInstance } from "vue";
export default {
    name: "home-view",
    components: {},
    data() {
        return {
            theme: "dark",
            minWidth: 160,
            maxWidth: 300,
            loading: {
                message: "loading...",
                radius: 40,
                width: 160,
                mask: true,
            },
            alert: {
                title: "This is title",
                message: "This is message",
                confirmText: "OK",
                cancelText: "Cancel",
                confirmColor: "#4e98ec",
                cancelColor: "#ff0000",
                width: 260,
                mask: true,
            },
            toast: {
                message: "This is toast content!",
                duration: 3000,
                type: "",
                mask: true,
            },
            showMask: false,
        };
    },
    mounted() {
        //this.$loading.show("LOADING...");
        // this.showDialog();
        // this.showToast();
    },

    methods: {
        showLoading() {
            // this.$showLoading("loading...");
            // setTimeout(() => {
            //     this.$hideLoading();
            // }, 2000);
            // console.log(this, this.app.proxy.$loading, this.app);

            this.$loading.show(this.loading.message, {
                theme: this.theme,
                mask: this.loading.mask,
                radius: parseInt(this.loading.radius),
                width: parseInt(this.loading.width),
                minWidth: parseInt(this.minWidth),
                maxWidth: parseInt(this.maxWidth),
            });
            var self = this;
            setTimeout(() => {
                self.$loading.hide();
            }, 3000);
        },
        showDialog() {
            // this.$alert("no null!");

            this.$alert({
                theme: this.theme,
                title: this.alert.title,
                message: this.alert.message,
                showCancel: true,
                confirmText: this.alert.confirmText,
                cancelText: this.alert.cancelText,
                confirmColor: this.alert.confirmColor,
                cancelColor: this.alert.cancelColor,
                width: parseInt(this.alert.width),
                minWidth: parseInt(this.minWidth),
                maxWidth: parseInt(this.maxWidth),
                mask: this.alert.mask,
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
        },
        showToast(img) {
            this.$toast
                .show({
                    theme: this.theme,
                    message: this.toast.message,
                    icon: this.toast.type,
                    width: parseInt(this.toast.width),
                    duration: parseInt(this.toast.duration),
                    image: img,
                    mask: this.toast.mask,
                })
                .then(() => {
                    console.log("toast closed");
                });
        },
    },
};
</script>
<style scoped>
.row {
    margin: 15px 15px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
}
.row span {
    width: 100px;
    text-align: right;
}
h1 {
    margin-top: 30px;
}
a {
    cursor: pointer;
}
button {
    padding: 10px 20px;
    appearance: none;
}
.mask {
    background: #fff;
    width: 80%;
    padding: 20px 0;
    color: #333;
    text-align: center;
}
</style>
