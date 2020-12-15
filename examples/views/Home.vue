<template>
    <div class="home">
        <a href="#" @click="showLoading">show loading</a> |

        <a href="#" @click="showDialog">show dialog</a>
    </div>
</template>

<script>
// @ is an alias to /src

export default {
    name: "Home",
    components: {},
    methods: {
        showLoading() {
            this.$showLoading("loading...");
            setTimeout(() => {
                this.$hideLoading();
            }, 2000);
        },
        showDialog() {
            this.$alert({
                title: "this is title",
                content: "this is content",
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
            });
        },
    },
};
</script>
