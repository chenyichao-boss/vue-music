<template>
  <Header></Header>
  <Tab></Tab>
  <router-view  v-slot="{ Component }">
    <keep-alive>
      <component :is="Component" />
    </keep-alive>
  </router-view>

  <router-view  v-slot="{ Component }" name="user">
    <transition appear name="slide">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </transition>
  </router-view>

  <Player></Player>
</template>
<script>
// import Text from './text.vue'
import Header from "./components/header/header";
import Tab from "./components/tab/tab.vue";
import Player from "./components/player/player";
import { mapState } from "vuex";
export default {
  name: "App",
  components: {
    Header,
    Tab,
    Player,
    // Text
  },

}
</script>

 <style>
</style>
