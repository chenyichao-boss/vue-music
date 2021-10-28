<template>
  <div 
  ref="rootRef" 
  class="suggest"
  v-no-result:[noResultText]="noResult"
  >
    <ul class="suggest-list">
      <li class="suggest-item" v-if="singer" @click="selectSinger(singer)">
        <div class="icon">
          <i class="icon-mine"></i>
        </div>
        <div class="name">
          <p class="text">{{ singer.name }}</p>
        </div>
      </li>
      <li
        class="suggest-item"
        v-for="song in songs"
        :key="song.id"
        @click="selectSong(song)"
      >
        <div class="icon">
          <i class="icon-music"></i>
        </div>
        <div class="name">
          <p class="text">{{ song.singer }}-{{ song.name }}</p>
        </div>
      </li>
      <!-- <div
        class="suggest-item"
        v-loading:[loadingText]="pullUpLoading"
      ></div> -->
    </ul>
  </div>
</template>

<script>
import { ref, watch, computed, nextTick } from "vue";
import { search } from "@/service/search";
import { processSongs } from '@/service/song'
import usePullUpLoad from './use-pull-up-load'

export default {
  name: "suggest",
  props: {
    query: String,
    showSinger: {
      type: Boolean,
      default: true,
    },
  },
  emits:['select-song','select-singer'],
  setup(props,{emit}) {
    const singer = ref(null);
    const songs = ref([]);
    const hasMore = ref(true);
    const page = ref(1);
    const noResultText = ref('抱歉，暂无搜索结果')

    const { scroll,rootRef,isPullUpLoad} = usePullUpLoad(searchMore)

    const noResult = computed(() => {
      return !singer.value && !songs.value.length && !hasMore.value
    })


    watch(
      () => props.query,
      async (newQuery) => {
        // console.log(props.query)
        if (!newQuery) {
          return;
        }
        await searchFirst();
      }
    );

    async function searchFirst() {
      if(!props.query){
        return
      }
      //searchFirst
      page.value = 1;
      songs.value = [];
      singer.value = null;
      hasMore.value = true;

      const result = await search(props.query, page.value, props.showSinger);
      // console.log('result:')
      // console.log(result)
      songs.value = await processSongs(result.songs);
      // console.log('processSongs之後sddfa')
      // console.log( songs.value)
      singer.value = result.singer;
      hasMore.value = result.hasMore;
      await nextTick()
      await makeItScrollable()
    }


    async function searchMore(){
      //searchMore
      if(!hasMore.value || !props.query){
        return
      }
      page.value++
      const result = await search(props.query, page.value, props.showSinger);
      songs.value = songs.value.concat(await processSongs(result.songs)) 
      hasMore.value = result.hasMore;
      // console.log(songs.value)
      await nextTick()
      await makeItScrollable()
    }

    async function makeItScrollable(){
      if(scroll.value.maxScrollY >= -1){       //当内容高度小于外层高度
        await searchMore()
      }
      // console.log('经过了makeItScrollable')
    }

    function selectSong(song){
      // this.$emit('select-song', song)       //这种方法会报错
      emit('select-song', song)
    }
    function selectSinger(singer){
      emit('select-singer',singer)
    }
    return {
      singer,
      rootRef,
      songs,
      hasMore,
      page,
      noResult,
      noResultText,
      selectSong,
      selectSinger,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variable.scss";
@import "@/assets/scss/mixin.scss";
.suggest {
  height: 100%;
  overflow: hidden;
  .suggest-list {
    padding: 0 30px;
    .suggest-item {
      display: flex;
      align-items: center;
      padding-bottom: 20px;
      .icon {
        flex: 0 0 30px;
        width: 30px;
        [class^="icon-"] {
          font-size: 14px;
          color: $color-text-d;
        }
      }
      .name {
        flex: 1;
        font-size: $font-size-medium;
        color: $color-text-d;
        overflow: hidden;
        .text {
          @include no-wrap();
        }
      }
    }
  }
}
</style>
