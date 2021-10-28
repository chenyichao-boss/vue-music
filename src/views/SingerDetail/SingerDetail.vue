<template>
<!-- 这个是个人歌手界面，用到了音乐列表 -->
  <div class="SingerDetail">
    <music-list :songs="songs"
      :pic="pic"
      :title="title"
      :loading="loading"
    ></music-list>
  </div>
</template>

<script>
import {getSingerDetail} from '../../service/singer'
import {processSongs } from '../../service/song'
import MusicList from '@/components/music-list/music-list'
import storage from 'good-storage'
import { SINGER_KEY } from '@/assets/js/constant'
export default {
  name:'SingerDetail',
  props:{
      singer:Object
  },
  components:{
    MusicList
  },
  data(){
    return{
      songs:[],
      loading:true
    }
  },
  computed:{
    computedSinger(){
      let ret = null
      if(this.singer){
        ret = this.singer
      }else{
        const catchSinger = storage.session.get(SINGER_KEY)
        if(catchSinger && catchSinger.mid === this.$route.params.id){
          console.log("true")
          ret = catchSinger
          // console.log('././././.../../')
          // console.log(this.$route)
          // console.log(this.$route.params)
        }
      }
      return ret
    },
    pic(){
    const singer = this.computedSinger

      return singer && singer.pic
    },
    title(){
    const singer = this.computedSinger
      return singer && singer.name
    }
  },
  async created(){ 
    if (!this.computedSinger) {
      const path = this.$route.matched[0].path
      this.$router.push({
        path
      })
      return
    }

    const result = await getSingerDetail(this.computedSinger)
    this.songs = await processSongs(result.songs)
    this.loading = false
    // console.log('result')
    // console.log(result)
    // console.log(songs)
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variable.scss';

  .SingerDetail {
    position: fixed;
    z-index: 10;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: $color-background;
  }
</style>