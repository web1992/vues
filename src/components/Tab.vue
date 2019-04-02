<template>
  <div class="tab">
    <router-link to="/slide/456">Go to slide</router-link>
    <van-tabbar v-model="active">
      <van-tabbar-item info="3">
        <span>自定义{{ $route.params.id }}</span>
        <img slot="icon" slot-scope="props" :src="props.active ? icon.active : icon.normal">
      </van-tabbar-item>
      <van-tabbar-item icon="search">标签</van-tabbar-item>
      <van-tabbar-item icon="setting-o">标签</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import logo from "./../assets/logo.png";
export default {
  data() {
    return {
      active: 0,
      icon: {
        normal: logo,
        active: logo
      }
    };
  },
  mounted: function() {
    this.$toast(this.$route.params.id);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
