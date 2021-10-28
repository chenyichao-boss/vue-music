<template>
<!-- 这是横向滚动组件 ，用在轮播图 -->
  <div class="slider" ref="rootRef">
    <div class="slider-group">
      <div class="slider-page" v-for="item in sliders" :key="item.id" >
        <a :href="item.link">
          <img :src="item.pic"/>
        </a>
      </div>
    </div>
    <div class="dots-wrapper">
      <span class="dot" v-for="(item, index) in sliders" :key="item.id" :class="{'active': currentPageIndex === index}">
      </span>
    </div>
  </div>
</template>

<script>
  import { ref } from 'vue'
  import useSlider from './useSilder'

  export default {
    name: 'slider',
    props: {
      sliders: {
        type: Array,
        default() {
          return []
        }
      }
    },
    setup() {
      const rootRef = ref(null)
      // console.log(rootRef)
      // const xxx = useSlider(rootRef)
      // const currentPageIndex = xxx.currentPageIndex
      const { currentPageIndex } = useSlider(rootRef)
      // console.log('111')
      // console.log(useSlider(rootRef))

      return {
        rootRef,
        currentPageIndex
      }
    }
  }
</script>

<style lang="scss" scoped>
// 颜色定义规范
$color-text-l: rgba(255, 255, 255, 0.5);
$color-text-ll: rgba(255, 255, 255, 0.8);
  .slider {
    min-height: 1px;
    font-size: 0;
    touch-action: pan-y;
    .slider-group {
      // position: relative;
      overflow: hidden;
      white-space: nowrap;
      .slider-page {
        display: inline-block;
        transform: translate3d(0, 0, 0);
        backface-visibility: hidden;
        a {
          display: block;
          width: 100%;
        }
        img {
          display: block;
          width: 100%;
        }
      }
    }
    .dots-wrapper {
      position: absolute;
      left: 50%;
      top: 110px; //原来是bottom: 12px
      line-height: 12px;
      transform: translateX(-50%);
      .dot {
        display: inline-block;
        margin: 0 4px;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: $color-text-l;
        &.active {
          width: 20px;
          border-radius: 5px;
          background: $color-text-ll;
        }
      }
    }
  }
</style>
