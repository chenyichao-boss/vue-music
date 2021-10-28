<template>
  <div>
    <div class="recommend" :style="viewStyle">
      <div v-if="loading">
        <div class="loading">
          <div class="loading-content">
            <img width="24" height="24" src="./loading.gif" />
            <p class="desc">{{ title }}</p>
          </div>
        </div>
      </div>
      <Scroll class="recommend-content" v-else>
        <div>
          <div class="slider-wrapper">
            <div class="slider-content">
              <Slider v-if="sliders.length" :sliders="sliders"></Slider>
            </div>
          </div>
          <div class="recommend-list">
            <h1 class="list-title" v-show="!loading">热门歌单推荐</h1>
            <ul>
              <li
                v-for="item in albums"
                class="item"
                :key="item.id"
                @click="selectItem(item)"
              >
                <div class="icon">
                  <img width="60" height="60" v-lazy="item.pic" />
                </div>
                <div class="text">
                  <h2 class="name">
                    {{ item.username }}
                  </h2>
                  <p class="title">
                    {{ item.title }}
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </Scroll>
      <router-view v-slot="{ Component }">
        <transition name="slide">
          <component :is="Component" :data="selectedAlBum" />
        </transition>
      </router-view>
    </div>
  </div>
</template>

<script>
import { getRecommend } from "@/service/recommend.js";
import Slider from "@/components/base/slider/slider";
import Scroll from "@/components/base/scroll/scroll";
import storage from "good-storage";
import { ALBUM_KEY } from "@/assets/js/constant";
import { mapState } from "vuex";
export default {
  components: {
    Slider,
    Scroll,
  },
  data() {
    return {
      sliders: [],
      albums: [],
      selectedAlbum: null,
      // loading:true,
    };
  },
  computed: {
    loading() {
      if (this.sliders[0] || this.albums[0]) {
        return false;
      } else {
        return true;
      }
    },
    viewStyle() {
      const bottom = this.playlist.length ? "60px" : "0";
      return {
        bottom,
      };
    },
    ...mapState(["playlist"]),
  },
  async created() {
    const result = await getRecommend();
    // console.log(result)
    this.sliders = result.sliders;
    this.albums = result.albums;
  },
  methods: {
    selectItem(album) {
      this.selectedAlbum = album;
      this.cacheAlbum(album);
      this.$router.push({
        path: `/recommend/${album.id}`,
      });
    },
    cacheAlbum(album) {
      storage.session.set(ALBUM_KEY, album);
    },
  },
};
</script>

<style lang="scss" scoped>
// 颜色定义规范
$color-background: #222;
$color-background-d: rgba(0, 0, 0, 0.3);
$color-highlight-background: #333;
$color-dialog-background: #666;
$color-theme: #ffcd32;
$color-theme-d: rgba(255, 205, 49, 0.5);
$color-sub-theme: #d93f30;
$color-text: #fff;
$color-text-d: rgba(255, 255, 255, 0.3);
$color-text-l: rgba(255, 255, 255, 0.5);
$color-text-ll: rgba(255, 255, 255, 0.8);
// 字体定义规范
$font-size-small-s: 10px;
$font-size-small: 12px;
$font-size-medium: 14px;
$font-size-medium-x: 16px;
$font-size-large: 18px;
$font-size-large-x: 22px;
.recommend {
  position: fixed;
  width: 100%;
  top: 88px;
  bottom: 0;
  overflow: scroll;
  .recommend-content {
    height: 100%;
    overflow: hidden;
    .slider-wrapper {
      position: relative;
      width: 100%;
      height: 0;
      padding-top: 40%;
      overflow: hidden;
      .slider-content {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
      }
    }
  }
  .recommend-list {
    .list-title {
      height: 65px;
      line-height: 65px;
      text-align: center;
      font-size: $font-size-medium;
      color: $color-theme;
    }
    .item {
      display: flex;
      box-sizing: border-box;
      align-items: center;
      padding: 0 20px 20px 20px;

      .icon {
        flex: 0 0 60px;
        width: 60px;
        padding-right: 20px;
        // float: left;
      }
      .text {
        display: flex;
        flex-direction: column;
        justify-content: center;
        flex: 1;
        line-height: 20px;
        overflow: hidden;
        font-size: $font-size-medium;
      }
      .name {
        margin-bottom: 10px;
        color: $color-text;
      }
      .title {
        color: $color-text-d;
      }
    }
  }
}
.loading {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
  .loading-content {
    text-align: center;
    .desc {
      line-height: 20px;
      font-size: $font-size-small;
      color: $color-text-l;
    }
  }
}
</style>