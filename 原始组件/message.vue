<template>
  <teleport to="body">
    <transition name="slide-down">
      <div class="message" v-show="visible" @click="hide">
        <slot></slot>
      </div>
    </transition>
  </teleport>
</template>

<script>
  export default {
    name: 'message',
    data() {
      return {
        visible: false
      }
    },

  }
</script>

<style scoped lang="scss">
@import "@/assets/scss/variable.scss";
@import "@/assets/scss/mixin.scss";
  .message {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 400;
    background: $color-dialog-background;

    &.slide-down-enter-active, &.slide-down-leave-active {
      transition: all 0.3s
    }

    &.slide-down-enter-from, &.slide-down-leave-to {
      transform: translate3d(0, -100%, 0)
    }
  }
</style>
