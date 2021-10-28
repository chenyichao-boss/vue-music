<template>
  <div class="tab">
    <router-link class="tab-item" v-for="tab in tabs" :key="tab.path" :to="tab.path">
      <span class="tab-link">
        {{ tab.name }}
      </span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "tab",
  data() {
    return {
      tabs: [
        {
          name: "推荐",
          path: "/recommend",
        },
        {
          name: "歌手",
          path: "/singer",
        },
        {
          name: "排行",
          path: "/toplist",
        },
        {
          name: "搜索",
          path: "/search",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
// @import '../../assets/scss/mixin.scss';
// 颜色定义规范
// $color-background: #222;
// $color-background-d: rgba(0, 0, 0, 0.3);
// $color-highlight-background: #333;
// $color-dialog-background: #666;
$color-theme: #ffcd32;
$color-theme-d: rgba(255, 205, 49, 0.5);
// $color-sub-theme: #d93f30;
$color-text: #fff;
$color-text-d: rgba(255, 255, 255, 0.3);
$color-text-l: rgba(255, 255, 255, 0.5);
$color-text-ll: rgba(255, 255, 255, 0.8);
// 字体定义规范
// $font-size-small-s: 10px;
// $font-size-small: 12px;
$font-size-medium: 14px;
$font-size-medium-x: 16px;
// $font-size-large: 18px;
// $font-size-large-x: 22px;
.tab {
  display: flex;
  height: 44px;
  line-height: 44px;
  font-size: $font-size-medium;

  .tab-item {
    flex: 1;
    text-align: center;

    .tab-link {
      padding-bottom: 5px;
      color: $color-text-l;
    }

    &.router-link-active {
      .tab-link {
        color: $color-theme;
        border-bottom: 2px solid $color-theme;
      }
    }
  }
}
</style>