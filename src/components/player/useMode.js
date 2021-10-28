
import { useStore } from 'vuex'
import { computed } from 'vue'
import { PLAY_MODE } from '@/assets/js/constant'

//这里用export default 会报错，无法找到这个函数
export function useMode(){
    const store = useStore()
    const playMode = computed(() => store.state.playMode)
    const modeIcon = computed(() => {
        const playModeVal = playMode.value

        return playModeVal === PLAY_MODE.sequence ? 'icon-sequence'
            : playModeVal === PLAY_MODE.loop ? 'icon-loop'
            : 'icon-random'
    })


    const modeText = computed(() => {
        const playModeVal = playMode.value
        return playModeVal === PLAY_MODE.sequence ? '顺序播放'
            : playModeVal === PLAY_MODE.loop ? '单曲播放'
            : '随机播放'
    })
    //修改歌曲循环模式
    function changeMode(){
        const mode = ( playMode.value +1) % 3
        store.dispatch('changeMode', mode)
    }




    return{
        modeIcon,
        changeMode,
        modeText
    }
    
    
}