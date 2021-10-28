const mutations = {
  setPlayingState(state, playing) {       //修改播放状态（播放/暂停）
    state.playing = playing
  },
  setSequenceList(state, list) {          //设置顺序播放列表
    state.sequenceList = list
  },
  setPlaylist(state, list) {              //设置实际播放列表
    state.playlist = list
  },
  setPlayMode(state, mode) {              //设置播放模式
    state.playMode = mode
  },
  setCurrentIndex(state, index) {         //设置当前播放索引
    state.currentIndex = index
  },
  setFullScreen(state, fullScreen) {      //设置播放状态（全屏/收缩）
    state.fullScreen = fullScreen
  },
  setFavoriteList(state, list) {
    state.favoriteList = list
  },
  addSongLyric(state, { song, lyric }) {
    state.sequenceList.map((item) => {
      if (item.mid === song.mid) {
        item.lyric = lyric
      }
      return item
    })
  },
  setSearchHistory(state, searches) {
    state.searchHistory = searches
  },
  setPlayHistory(state, songs) {
    state.playHistory = songs
  }
}

export default mutations
