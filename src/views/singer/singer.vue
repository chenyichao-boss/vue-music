<template>
  <!-- 这是歌手列表界面，包含所有歌手（按字母排序） -->
  <div class="singer" :style="viewStyle">
    <IndexList :data="singers" @select="selectSinger"></IndexList>
  </div>
  <router-view v-slot="{ Component }">
    <transition name="slide">
      <component :is="Component" :data="selectedSinger" />
    </transition>
  </router-view>
</template>

<script>
import IndexList from "@/components/base/IndexList/IndexList";
import { getSingerList } from "@/service/singer";
import storage from "good-storage";
import { SINGER_KEY } from "@/assets/js/constant";
import { mapState } from "vuex";

export default {
  components: {
    IndexList,
  },
  data() {
    return {
      singers: [],
      selectedSinger: null,
    };
  },
  async created() {
    const result = await getSingerList();
    console.log(result);
    this.singers = result.singers;
  },
  methods: {
    selectSinger(singer) {
      this.selectedSinger = singer;
      this.cacheSinger(singer);
      this.$router.push({ path: `/singer/${singer.mid}` });
    },

    cacheSinger(singer) {
      storage.session.set(SINGER_KEY, singer);
    },
  },
  computed: {
    viewStyle() {
      const bottom = this.playlist.length ? "60px" : "0";
      return {
        bottom,
      };
    },
    ...mapState(["playlist"]),
  },
};
</script>

<style lang="scss" scoped>
.singer {
  position: fixed;
  width: 100%;
  top: 88px;
  bottom: 0px;
}
</style>