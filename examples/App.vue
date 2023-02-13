<template>
    <div id="app">
        <router-view />
        <!-- <vue-ui-loading v-if="showLoading" :message="msg"></vue-ui-loading> -->
        <!-- <vue-ui-alert :options="dialogOptions"></vue-ui-alert> -->
    </div>
</template>
<script>
export default {
    data() {
        return {};
    },
    beforeCreate() {},
};
</script>

<style>
* {
    margin: 0;
    padding: 0;
}
body {
    background: #4c4c4c;
}
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #fff;
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
