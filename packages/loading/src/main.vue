<template>
    <div>
        <Mask v-if="visible && options.mask">
            <transition name="vue-ui-fade">
                <div class="loader" :class="`vue-ui-theme-${options.theme}`" :style="`${_readerStyle('min-width', options.minWidth)}${_readerStyle('max-width', options.maxWidth)}${_readerStyle('width', options.width)}`">
                    <div class="loading" :style="`width:${options.radius}px;height:${options.radius}px;`"></div>
                    <label v-show="message">{{ message }}</label>
                </div>
            </transition>
        </Mask>
        <Teleport to="body" v-if="visible && !options.mask">
            <transition name="vue-ui-fade">
                <div class="loader" :class="`vue-ui-theme-${options.theme}`" :style="`${_readerStyle('min-width', options.minWidth)}${_readerStyle('max-width', options.maxWidth)}${_readerStyle('width', options.width)}`">
                    <div class="loading" :style="`width:${options.radius}px;height:${options.radius}px;`"></div>
                    <label v-show="message">{{ message }}</label>
                </div>
            </transition>
        </Teleport>
    </div>
</template>

<script>
import Mask from "../../mask/src/main.vue";
export default {
    name: "vue-ui-loading",
    components: { Mask },
    props: {
        opts: Object,
    },
    data() {
        return {
            visible: false,
            message: "",
            options: {},
        };
    },
    mounted() {
        this.def = Object.assign({ theme: "dark", width: 0, minWidth: 160, maxWidth: 300, radius: 40, mask: true }, this.opts);
    },
    methods: {
        _readerStyle(prop, val) {
            if (typeof val == "string") return `${prop}:${val};`;
            if (typeof val == "number") {
                if (val <= 0) return "";
                return `${prop}:${val}px;`;
            }
        },
        show(message, _opts = null) {
            this.options = Object.assign({}, this.def, _opts);
            this.message = message;
            this.visible = true;
        },
        hide() {
            this.visible = false;
        },
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url("../../global.css");

/* .load-container {
    font-family: "PingFangSC-Regular", "Microsoft YaHei", Helvetica, Arial, sans-serif;
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background: var(--vue-ui-mask-bg-color);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    z-index: 9999998;
} */
.loader {
    /* background: rgba(0, 0, 0, 0.8); */
    background: var(--vue-ui-dark-primary-bg-color);
    padding: 25px 0;
    border-radius: var(--vue-ui-border-radius);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    z-index: 99999;
}
.vue-ui-theme-light {
    background: var(--vue-ui-light-primary-bg-color);
}

.loading {
    position: relative;
    border-top: 4px solid rgba(255, 255, 255, 0.2);
    border-right: 4px solid rgba(255, 255, 255, 0.2);
    border-bottom: 4px solid rgba(255, 255, 255, 0.2);
    border-left: 4px solid #ffffff;
    -webkit-transform: translateZ(0);
    -ms-transform: translateZ(0);
    transform: translateZ(0);
    -webkit-animation: loading 1.1s infinite linear;
    animation: loading 1.1s infinite linear;
    border-radius: 50%;
    margin: 0 25px;
}
.vue-ui-theme-light .loading {
    border-left: 4px solid var(--vue-ui-dark-primary-bg-color);
    border-top: 4px solid #ccc;
    border-right: 4px solid #ccc;
    border-bottom: 4px solid #ccc;
}

.loader label {
    font-size: var(--vue-ui-message-size);
    margin: 10px 25px 0 25px;
    color: var(--vue-ui-dark-txt-color);
    text-align: center;
}
.vue-ui-theme-light label {
    color: var(--vue-ui-light-txt-color);
}

@-webkit-keyframes loading {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
    }
}
@keyframes loading {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
    }
}
</style>
