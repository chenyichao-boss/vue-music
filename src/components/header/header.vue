<template>
  <div class="header">
    <span class="icon"></span>
    <h1 class="text">Chicken Music</h1>
    <router-link class="mine" to="/usecenter"> -->
      <i class="icon-mine"></i>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "m-header",
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/mixin.scss";
// 颜色定义规范
$color-background: #222;
$color-background-d: rgba(0, 0, 0, 0.3);
$color-highlight-background: #333;
$color-dialog-background: #666;
$color-theme: #ffcd32;
$color-theme-d: rgba(255, 205, 49, 0.5);
$color-sub-theme: #d93f30;
$color-text: #fff;
$color-text-d: rgba(255, 255, 255, 0.3);
$color-text-l: rgba(255, 255, 255, 0.5);
$color-text-ll: rgba(255, 255, 255, 0.8);
// 字体定义规范
$font-size-small-s: 10px;
$font-size-small: 12px;
$font-size-medium: 14px;
$font-size-medium-x: 16px;
$font-size-large: 18px;
$font-size-large-x: 22px;
// .header {
//   height: 44px;
//   text-align: center;
//   color: $color-theme;
//   font-size: 0;
//   .icon {
//     display: inline-block;
//     vertical-align: top;
//     margin-top: 6px;
//     width: 30px;
//     height: 32px;
//     margin-right: 9px;
//     @include bg-image("logo");
//     background-size: 30px 32px;
//   }
//   .text {
//     display: inline-block;
//     vertical-align: top;
//     line-height: 44px;
//     font-size: $font-size-large;
//   }
// }
.header {
  height: 44px;
  text-align: center;
  color: $color-theme;
  font-size: 0;
  .icon {
    display: inline-block;
    vertical-align: top;
    margin-top: 6px;
    width: 30px;
    height: 32px;
    margin-right: 9px;
    @include bg-image('logo');
    background-size: 30px 32px;
  }
  .text {
    display: inline-block;
    vertical-align: top;
    line-height: 44px;
    font-size: $font-size-large;
  }
  .mine {
    position: absolute;
    top: 0;
    right: 0;
    .icon-mine {
      display: block;
      padding: 12px;
      font-size: $font-size-large-x;
      color: $color-theme;
    }
  }
}
</style>
