<template>
    <transition name="vue-ui-fade">
        <div class="dialog-mask" v-if="visible" @touchmove.prevent @mousewheel.prevent>
            <div class="dialog-container" :class="`vue-ui-theme-${options.theme}`" :style="`${_readerStyle('min-width', options.minWidth)}${_readerStyle('max-width', options.maxWidth)}${_readerStyle('width', options.width)}`">
                <div class="title" v-show="options.title">{{ options.title }}</div>
                <div class="content">{{ options.message }}</div>
                <div class="oper">
                    <div class="cancel-btn" :style="'color:' + options.cancelColor" v-show="options.showCancel" @click="_onCancel">
                        {{ options.cancelText }}
                    </div>
                    <div :style="'color:' + options.confirmColor" @click="_onConfirm">
                        {{ options.confirmText }}
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    name: "vue-ui-alert",
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
        this.def = Object.assign(
            {
                theme: "dark",
                width: 0,
                minWidth: 160,
                maxWidth: 300,
                title: "",
                message: "",
                confirmText: "确定",
                confirmColor: "#2e87f0",
                showCancel: false,
                cancelText: "取消",
                cancelColor: "#b2b2b4",
                onConfirm: null,
                onCancel: null,
            },
            this.opts
        );
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
            var self = this;
            return new Promise((resolve, reject) => {
                self.resolve = resolve;
                self.reject = reject;
            });
        },
        _onConfirm() {
            this.visible = false;
            this.resolve();
            if (this.options.onConfirm) this.options.onConfirm();
        },
        _onCancel() {
            this.visible = false;
            this.reject();
            if (this.options.onCancel) this.options.onCancel();
        },
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url("../../global.css");

.dialog-mask {
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
.dialog-container {
    font-family: "PingFangSC-Regular", "Microsoft YaHei", Helvetica, Arial, sans-serif;
    /* background: #1e1e1e; */
    background: var(--vue-ui-dark-primary-bg-color);
    color: #eee;
    border-radius: 10px;
    padding-top: 10px;
    width: 70%;
    overflow: hidden;
}
.vue-ui-theme-light {
    background: var(--vue-ui-light-primary-bg-color);
}
.dialog-container .title {
    font-size: var(--vue-ui-title-size);
    font-weight: 800;
    padding: 0 15px 0 15px;
    color: var(--vue-ui-dark-txt-color);
    margin-top: 10px;
    text-align: center;
}

.dialog-container .content {
    padding: 0 15px 0 15px;
    margin: 20px 0 30px 0;
    font-size: var(--vue-ui-message-size);
    color: var(--vue-ui-dark-txt-color);
    text-align: center;
}
.vue-ui-theme-light .content,
.vue-ui-theme-light .title {
    color: var(--vue-ui-light-txt-color);
}
.dialog-container .oper {
    margin-top: 15px;
    border-top: 1px #3d3d3d solid;
    height: 40px;
    display: flex;
}
.dialog-container .oper div {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}
.dialog-container .oper .cancel-btn {
    border-right: 1px #3d3d3d solid;
}
.vue-ui-theme-light .oper,
.vue-ui-theme-light .oper .cancel-btn {
    border-color: #e1e1e1;
}
</style>
