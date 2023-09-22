<template>
    <transition name="vue-ui-fade">
        <Teleport :to="teleport">
            <div class="vue-ui-mask" :style="backGround ? 'background:' + backGround : ''" v-if="lock" @mousewheel.prevent @touchmove.prevent>
                <slot></slot>
            </div>
            <div class="vue-ui-mask" :style="backGround ? 'background:' + backGround : ''" v-else>
                <slot></slot>
            </div>
        </Teleport>
    </transition>
</template>
<script>
export default {
    name: "vue-ui-mask",
    props: {
        teleport: {
            type: String,
            default: "body",
        },
        lock: {
            type: Boolean,
            default: true,
        },
        backGround: {
            type: String,
            default: null,
        },
    },
    data() {
        return {};
    },
    mounted() {},
    methods: {},
};
</script>
<style scoped>
.vue-ui-mask {
    background-color: var(--vue-ui-mask-bg-color);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
</style>
