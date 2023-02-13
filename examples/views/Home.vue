<template>
    <div class="home">
        <a @click="showLoading">show loading</a> |

        <a @click="showDialog">show dialog</a>

        <br /><br />
        <div><a @click="showToast('')">show toast(default)</a> <br /><a @click="showToast('error')">show toast(error)</a><br /><a @click="showToast('success')">show toast(success)</a><br /><a @click="showToast('warning')">show toast(warning)</a> <br /><a @click="showToast('warning', require('../assets/error.png'))">show toast(custom image)</a></div>
    </div>
</template>

<script>
// @ is an alias to /src
// import { getCurrentInstance } from "vue";
export default {
    name: "home-view",
    components: {},
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

            this.$loading.show();
            // this.$showLoading("afdasf");
            var self = this;
            setTimeout(() => {
                self.$loading.hide();
            }, 3000);
        },
        showDialog() {
            // this.$alert("no null!");

            this.$alert({
                title: "This is title",
                message: "This is contentThis is contentThis is contentThis is contentThis is contentThis is contentThis is content",
                showCancel: true,
                confirmText: "OK",
                cancelText: "Cancel",
                // confirmColor: "#fff",
                // cancelColor: "#ff0000",
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
        showToast(icon, img) {
            this.$toast
                .show({
                    message: "This is toast content!",
                    icon: icon,
                    image: img,
                })
                .then(() => {
                    console.log("toast closed");
                });
        },
    },
};
</script>
<style scoped>
a {
    cursor: pointer;
}
.home {
    height: 3000px;
}
</style>
