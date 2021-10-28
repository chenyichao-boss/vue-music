import { PLAY_MODE, FAVORITE_KEY,SEARCH_KEY ,PLAY_KEY} from '@/assets/js/constant'
import { load } from '@/assets/js/array-store'

const state = {
  sequenceList: [],                   //  顺序播放列表
  playlist: [],                       //  真实播放列表
  playing: false,                     //  是否正在播放
  playMode: PLAY_MODE.sequence,       //  播放模式
  currentIndex: 0,                    //  当前播放索引
  fullScreen: false,                  //  播放状态（全屏/收缩）
  favoriteList: [],                   //  收藏歌曲列表
  searchHistory: load(SEARCH_KEY),    //  历史记录
  playHistory: []                     //  播放历史
}

export default state
