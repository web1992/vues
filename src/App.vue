<template>
  <div id="app">
    <!-- <vue-slider v-model="value"></vue-slider> -->
    <Slide/>
    <!-- <img :src="logo" @click="onClick('123','456')"> -->
    <!-- //<Tab/> -->
  </div>
</template>


<script>
//

//import HelloWorld from "./components/HelloWorld.vue";
// import Tab from "./components/Tab.vue";
// import FileUpload from "./components/FileUpload.vue";
import Slide from "./components/Slide.vue";
import logo from "./assets/logo.png";
export default {
  name: "app",
  components: {
    Slide
  },
  data() {
    return {
      logo: logo
    };
  },
  methods: {
    onClick(index, title) {
      this.$toast(title);
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
