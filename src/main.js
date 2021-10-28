import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import lazyPlugin from 'vue3-lazy'
import noResultDirective from '@/components/base/no-result/directive'
import { load, saveAll } from '@/assets/js/array-store'
import { FAVORITE_KEY, PLAY_KEY } from '@/assets/js/constant'
import { processSongs } from '@/service/song'
import './assets/scss/index.scss'

const favoriteSongs = load(FAVORITE_KEY)
// debugger
if(favoriteSongs.length > 0){

  processSongs(favoriteSongs).then((songs) => {
    store.commit('setFavoriteList',songs)
    saveAll(songs,FAVORITE_KEY)
  })
}
const historySongs = load(PLAY_KEY)
if (historySongs.length > 0) {

  // xxx()

  processSongs(historySongs).then((songs) => {
    console.log(songs)
    store.commit('setPlayHistory', songs)
    saveAll(songs, PLAY_KEY)
  })
}
// async function xxx(){
//   const result = await processSongs(historySongs)
//   console.log( result)
//   console.log('开始')
// }
// 引入全局样式文件
createApp(App).use(store).use(router).use(lazyPlugin,{
    loading: require('@/assets/images/default.png'), // 图片加载时默认图片
    error: require('@/assets/images/err.png')// 图片加载失败时默认图片
  }).directive('no-result', noResultDirective).mount('#app')
