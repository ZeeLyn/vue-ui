<template>
    <div class="dialog-mask" v-if="visible">
        <div class="dialog-container" :style="`max-width:${arg.maxWidth}px;`">
            <div class="title" v-show="arg.title">{{ arg.title }}</div>
            <div class="content">{{ arg.message }}</div>
            <div class="oper">
                <div class="cancel-btn" :style="'color:' + arg.cancelColor" v-show="arg.showCancel" @click="_onCancel">
                    {{ arg.cancelText }}
                </div>
                <div :style="'color:' + arg.confirmColor" @click="_onConfirm">
                    {{ arg.confirmText }}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "vue-ui-alert",

    data() {
        return {
            visible: false,
            arg: {},
        };
    },
    methods: {
        show(opts) {
            if (typeof opts == "string") opts = { message: opts };
            var _arg = {};
            Object.assign(
                _arg,
                {
                    title: "",
                    message: "",
                    confirmText: "确定",
                    confirmColor: "#2e87f0",
                    showCancel: false,
                    cancelText: "取消",
                    cancelColor: "#b2b2b4",
                    onConfirm: null,
                    onCancel: null,
                    maxWidth: 300,
                },
                opts
            );
            this.arg = _arg;
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
            if (this.arg.onConfirm) this.arg.onConfirm();
        },
        _onCancel() {
            this.visible = false;
            this.reject();
            if (this.arg.onCancel) this.arg.onCancel();
        },
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.dialog-mask {
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
.dialog-container {
    background: #1e1e1e;
    color: #eee;
    border-radius: 10px;
    padding-top: 10px;
    width: 70%;
}
.dialog-container .title {
    font-size: 15px;
    font-weight: bold;
    padding: 0 15px 0 15px;
    color: #eee;
    margin-top: 10px;
    text-align: center;
}
.dialog-container .content {
    padding: 0 15px 0 15px;
    margin: 20px 0 30px 0;
    font-size: 14px;
    color: #fff;
    text-align: center;
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
</style>
