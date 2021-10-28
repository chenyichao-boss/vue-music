<template>
  <teleport to="body">
    <transition name="slide">
      <div class="add-song" v-show="visible">
        <div class="header">
          <h1 class="title">添加歌曲到列表</h1>
          <div class="close" @click="hide">
            <i class="icon-close" ></i>
          </div>
        </div>
        <div class="search-input-wrapper">
          <SearchInput v-model="query" placeholder="搜索歌曲"></SearchInput>
        </div>
        <div v-show="!query">
          <Switches
            :items="['最近播放', '搜索历史']"
            v-model="currentIndex"
          ></Switches>
          <div class="list-wrapper">
            <Scroll
              ref="scrollRef"
              v-if="currentIndex===0"
              class="list-scroll"
            >
              <div class="list-inner">
                <SongList
                  :songs="playHistory"
                  @select="selectSongBySongList"
                >
                </SongList>
              </div>
            </Scroll>
            <Scroll
              ref="scrollRef"
              v-if="currentIndex===1"
              class="list-scroll"
            >
              <div class="list-inner">
                <SearchList
                  :searches="searchHistory"
                  :show-delete="false"
                  @select="addQuery"
                ></SearchList>
              </div>
            </Scroll>
          </div>
        </div>
        <div class="search-result" v-show="query">
          <Suggest 
          :query="query" 
          :show-singer="false"
          @select-song="selectSongBySuggest"
          >
          </Suggest>
        </div>
        <Message ref="messageRef">
          <div class="message-title">
            <i class="icon-ok"></i>
            <span class="text">1首歌曲已经添加到播放列表</span>
          </div>
        </Message>
      </div>
    </transition>
  </teleport>
</template>

<script>
import SearchInput from "@/components/search/search-input";
import Suggest from "@/components/search/suggest";
import Switches from '@/components/base/switches/switches'
import Scroll from '@/components/base/scroll/scroll'
import SongList from '@/components/base/song-list/song-list'
import SearchList from '@/components/base/search-list/search-list'
import Message from '@/components/base/message/message'
import { ref, computed, nextTick, watch } from 'vue'
import { useStore } from 'vuex'
import useSearchHistory from '@/components/search/use-search-history'

export default {
  name: "add-song",
  components: {
    SearchInput,
    Suggest,
    Switches,
    Message,
    Scroll,
    SongList,
    SearchList,
  },
  // emits:[''],
  setup(){
    const query= ref('')
    const visible = ref(false)
    const store = useStore()
    const currentIndex = ref(0)
    const messageRef = ref(null)
    const scrollRef = ref(null)
    const searchHistory = computed(() => store.state.searchHistory)
    const playHistory = computed(() => store.state.playHistory)
    const { saveSearch } = useSearchHistory()

    watch(query,async () => {
      await nextTick()
      refreshScroll()
    })

    async function show(){
      visible.value = true
      await nextTick()
      refreshScroll()
    }

    function hide(){
      visible.value = false
    }
    function refreshScroll(){
      scrollRef.value.scroll.refresh()
    }
    // function selectSong(song){
    //   store.dispatch('addSong',song)
    //   // store.commit('setFullScreen',true)
    // }
    function addQuery(s){
      query.value = s
    }
    function selectSongBySuggest(song){
      addSong(song)
      saveSearch(query.value)
    }
    function selectSongBySongList({song}){
      addSong(song)
    }

    function addSong(song){
      store.dispatch('addSong',song)
      showMessage()
    }

    function showMessage(){
      messageRef.value.show()
    }

    return{
      query,
      scrollRef,
      messageRef,
      visible,
      currentIndex,
      searchHistory,  
      playHistory,
      show,
      hide,
      //selectSong,
      addQuery,
      selectSongBySuggest,
      selectSongBySongList,
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variable.scss";
@import "@/assets/scss/mixin.scss";
.add-song {
  position: fixed;
  top: 0;
  bottom: 0;
  width: 100%;
  z-index: 300;
  background: $color-background;
  .header {
    position: relative;
    height: 44px;
    text-align: center;
    .title {
      line-height: 44px;
      font-size: $font-size-large;
      color: $color-text;
    }
    .close {
      position: absolute;
      top: 0;
      right: 8px;
      .icon-close {
        display: block;
        padding: 12px;
        font-size: 20px;
        color: $color-theme;
      }
    }
  }
  .search-input-wrapper {
    margin: 20px;
  }
  .list-wrapper {
    position: absolute;
    top: 165px;
    bottom: 0;
    width: 100%;
    .list-scroll {
      height: 100%;
      overflow: hidden;
      .list-inner {
        padding: 20px 30px;
      }
    }
  }
  .search-result {
    position: fixed;
    top: 124px;
    bottom: 0;
    width: 100%;
  }
}

.message-title {
  text-align: center;
  padding: 18px 0;
  font-size: 0;
  .icon-ok {
    font-size: $font-size-medium;
    color: $color-theme;
    margin-right: 4px;
  }
  .text {
    font-size: $font-size-medium;
    color: $color-text;
  }
}
</style>
