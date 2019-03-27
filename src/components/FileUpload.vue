<template>
  <div class="file">
    <van-uploader :after-read="onRead">
      <van-icon name="photograph"/>
    </van-uploader>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    onRead(file) {
      alert(file.content);
    }
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
