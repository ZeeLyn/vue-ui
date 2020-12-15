<template>
    <div id="app">
        <div id="nav">
            <router-link to="/">Home</router-link> |
            <router-link to="/about">About</router-link>
        </div>
        <router-view />
        <vue-ui-loading v-if="showLoading" :msg="msg"></vue-ui-loading>
        <vue-ui-alert :options="dialogOptions"></vue-ui-alert>
    </div>
</template>
<script>
import Vue from "vue";
export default {
    data() {
        return {
            msg: "",
            showLoading: false,
            dialogOptions: {},
        };
    },
    mounted() {
        Vue.prototype.$showLoading = (_msg) => {
            if (_msg) this.msg = _msg;
            this.showLoading = true;
        };
        Vue.prototype.$hideLoading = () => {
            this.showLoading = false;
        };
        Vue.prototype.$alert = (arg) => {
            this.dialogOptions = arg;
        };
    },
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

#nav {
    padding: 30px;
}

#nav a {
    font-weight: bold;
    color: #2c3e50;
}

#nav a.router-link-exact-active {
    color: #42b983;
}
</style>
