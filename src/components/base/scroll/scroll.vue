<template>
<!-- 这是滚动组件，用在歌手列表、歌曲列表、历史记录等地方 -->
  <div ref="rootRef">
      <slot></slot>
  </div>
</template>

<script>

import useScroll from './useScroll'
import {ref} from 'vue'
export default {
    name:'scroll',
    props:{
      click: {
        type: Boolean,
        default: true
      },
      probeType: {
        type: Number,
        default: 0
      }
    },
    emits: ['cycscroll'],
    setup(props , { emit }){
      const rootRef = ref(null)
      const scroll = useScroll(rootRef,props,emit)
      return {
        rootRef,
        scroll
      }
    }
}
</script>

<style lang="scss" scoped>
 

</style>