<template>
  <div id="app">
    <div>welcome to vue</div>
    <hr>
    <img :src="logo" @click="onClick('123','456')">
    <hr>
    <div>
      <ul>
        <li>
          <router-link to="/tab/1">Go to tab</router-link>
        </li>
        <li>
          <router-link to="/slide/123">Go to slide</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>


<script>
//

import logo from "./assets/logo.png";
export default {
  name: "app",
  components: {},
  data() {
    return {
      logo: logo,
      id: 1
    };
  },
  methods: {
    onClick(index, title) {
      this.$toast(title);
      this.$router.push({ name: "tab", params: { id: "123" } });
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
