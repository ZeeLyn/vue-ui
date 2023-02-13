<template>
    <transition name="fade">
        <div class="toast-mask" v-if="visible" @touchmove.prevent @mousewheel.prevent>
            <div class="toast-container" :class="`vue-ui-theme-${options.theme}`" :style="`${_readerStyle('min-width', options.minWidth)}${_readerStyle('max-width', options.maxWidth)}${_readerStyle('width', options.width)}`">
                <img :src="options.image" v-if="options.image" class="custom-icon" />
                <i class="vue-ui-toast-iconfont" :class="`vue-ui-icon-${options.icon}`" v-if="options.icon && !options.image"></i>
                <div class="content">{{ options.message }}</div>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    name: "vue-ui-toast",
    props: {
        opts: Object,
    },
    data() {
        return {
            visible: false,
            options: {},
        };
    },
    mounted() {
        this.def = Object.assign({ theme: "dark", width: 0, minWidth: 160, maxWidth: 300, radius: 40, duration: 3000 }, this.opts);
    },
    methods: {
        _readerStyle(prop, val) {
            if (typeof val == "string") return `${prop}:${val};`;
            if (typeof val == "number") {
                if (val <= 0) return "";
                return `${prop}:${val}px;`;
            }
        },
        show(opts) {
            if (typeof opts == "string") opts = { message: opts };
            this.options = Object.assign({}, this.def, opts);
            this.visible = true;
            if (this.timer) clearTimeout(this.timer);
            var self = this;
            return new Promise((resolve) => {
                this.timer = setTimeout(() => {
                    self.hide();
                    resolve();
                }, this.options.duration);
            });
        },
        hide() {
            this.visible = false;
            if (this.timer) clearTimeout(this.timer);
        },
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.fade-enter-active {
    animation: fade-in-out 0.2s forwards;
}
.fade-leave-active {
    animation: fade-in-out 0.2s forwards reverse;
}
@keyframes fade-in-out {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}
@font-face {
    font-family: "vue-ui-toast-iconfont"; /* Project id 3885484 */
    src: url("data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAPAAAsAAAAACQQAAAN0AAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHFQGYACDHAqEGIN1ATYCJAMQCwoABCAFhgMHQxsUCBEVnF/Ifhzkpqlrsv1xmh9dlEXjvwdB1VVZXbW2DmbPnWcOxFOOP8gvX+37zbmxsRGmKGtHHnXpX8vpS3KDAPif+7386vi3B3Ltp1tkUXSDfV83RSVtRNsHnaDNhmzJWcVmJX7nZxCAPakUo1VWN3biPGHojEn4o+BhAV2mmDB29FBsXR1qBUVgq7Te9FKF2IAVaKu1W6xYX41e/CQVtqBhJeG7tI6qGsHNL4G/pknd0EG+ohhCQIdrgBUggcQLM4gxq23DkE0wEYm95Fdkg/kzWzT4Evil6tc0w4DgpmS26l8eCDQkCGtY5ggiUyofGD+jQsCXKio0+DVNhyRMKWwpfAxhQyrPw5yqIf28/PwCvRzt5ps7Hz3SpN71+DFp6Xn6lDR1P3limWPuLjSmnpHG0iVr9M51/r7B+hbPEVu2mLd5dx8TptMOR726Rm/f7rD95D4+NnCrfsLs3d25xXzK5NPTvc102uLV1bPdclL37By6f3QpuhZdsv8gTT9pOS2k6ZT5xICWW58WKvUxg2L6R69dG90/ZtA9zS5Xv3Zt/+hBMfeE3a2Xnpk1Mn9oXt7Q/JG/wMbMQ/NG5v+a3H5zmc3AjODgjMcujzMOH852d+vxyKs0r1bKmEibj9s5Yt7ys6fDRoVdPsuSyzV6uqG5O8bgJZPLJhQXTyibrDS7nHlC8eQyhaKDb3OncP9wpyLoEuh5JVbF0AoYfLSukDoY++V7OfQ/8DyKs3f9H+xS+NvWQQHwzvbh/apmc/53yI943/gOBygMA+UmglLACn7F39yNouYt82uAvXKBAZc7bw6h8Ij8IPAa8B3QsCEWJF6kIIqoBCsc6ANrvBgB9iQw92oHPDgiEcoOiOaCAYJ4XoOGs7ABSbzwQhRRAlZ4i7ESa4lYDPZ0i5O3cyBaGKaToDDUVP6pq3h2+hr7eAS+C4wLtSBZ/R2NHwuRm9Oo3xDteKYkjFdFbpghxz1DP01q5sgJT3SNnoZxZFqEe1QWtmZLFkVO+paw4ml1EhSGmso/dRXPrmC1j0eAdL9tXKgFG/nvaJyFGgvZpUOIf0MU3OHGoiSMd0Vusnn3hjcs0fipTWrmyAlPdN3NglEFmRb5oB6Vhe0O/iWLMMhtKgtPr5i+rDGA/Yq/QK01IYUSVhzVVxVU9xBhOX4Lmbu5Wa0A") format("woff2");
}

.vue-ui-toast-iconfont {
    font-family: "vue-ui-toast-iconfont" !important;
    font-size: 40px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin-bottom: 10px;
}

.vue-ui-icon-success:before {
    content: "\e61c";
    color: #2cac68;
}

.vue-ui-icon-error:before {
    content: "\e645";
    color: #ff0000;
}

.vue-ui-icon-warning:before {
    content: "\ec72";
    color: rgb(255, 162, 0);
}

.custom-icon {
    width: 40px;
    margin-bottom: 10px;
}
.toast-mask {
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background: var(--vue-ui-mask-bg-color);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999999;
}
.toast-container {
    background: var(--vue-ui-dark-primary-bg-color);
    border-radius: 10px;
    padding: 20px 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    max-width: 80%;
}
.vue-ui-theme-light {
    background: var(--vue-ui-light-primary-bg-color);
}

.toast-container .content {
    font-family: "PingFangSC-Regular", "Microsoft YaHei", Helvetica, Arial, sans-serif;
    font-size: var(--vue-ui-message-size);
    color: var(--vue-ui-dark-txt-color);
    text-align: center;
}
.vue-ui-theme-light .content {
    color: var(--vue-ui-light-txt-color);
}
</style>
