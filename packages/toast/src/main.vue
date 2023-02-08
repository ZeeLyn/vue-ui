<template>
    <div class="toast-mask" v-if="visible">
        <div class="toast-container">
            <img :src="opts.image" v-if="opts.image" class="custom-icon" />
            <i class="vue-ui-toast-iconfont" :class="`vue-ui-icon-${opts.icon}`" v-if="opts.icon && !opts.image"></i>
            <div class="content">{{ opts.message }}</div>
        </div>
    </div>
</template>

<script>
export default {
    name: "vue-ui-alert",

    data() {
        return {
            visible: false,
            opts: {},
        };
    },

    methods: {
        show(opts) {
            if (typeof opts == "string") opts = { message: opts };
            var _arg = {};
            Object.assign(
                _arg,
                {
                    message: "",
                    icon: "",
                    duration: 3000,
                    image: "",
                },
                opts
            );
            this.opts = _arg;
            this.visible = true;
            if (this.timer) clearTimeout(this.timer);
            var self = this;
            return new Promise((resolve) => {
                this.timer = setTimeout(() => {
                    self.hide();
                    resolve();
                }, _arg.duration);
            });
        },
        hide() {
            this.visible = false;
            this.opts = {};
        },
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
    color: #09f979;
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
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999999;
}
.toast-container {
    background: #1e1e1e;
    color: #eee;
    border-radius: 10px;
    padding: 20px 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    max-width: 80%;
}
.toast-container .title {
    font-size: 15px;
    font-weight: bold;
    padding: 0 15px 0 15px;
    color: #eee;
    margin-top: 10px;
    text-align: center;
}
.toast-container .content {
    font-size: 14px;
    color: #fff;
    text-align: center;
}
</style>
