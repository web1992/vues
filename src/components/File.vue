// https://www.iviewui.com/components/upload
<template>
  <div class="fileRef">
    <Upload
      ref="fileRef"
      action="//jsonplaceholder.typicode.com/posts/"
      :before-upload="beforeUpload"
    >
      <Button icon="ios-cloud-upload-outline">Upload files</Button>
    </Upload>
    <img v-if="null !=fileImage" :src="fileImage">
    <div v-if="file !== null">
      Upload file: {{ file.name }}
      <Button
        type="text"
        @click="upload"
        :loading="loadingStatus"
      >{{ loadingStatus ? 'Uploading' : 'Click to upload' }}</Button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fileList: [],
      fileImage: null, // base64
      file: null, // File 对象
      loadingStatus: false
    };
  },
  methods: {
    beforeUpload(file) {
      var reader = new FileReader();
      var t = this;
      this.file = file;
      this.loadingStatus = false;
      reader.onload = function() {
        // data:image/png;base64
        var dataURL = reader.result;
        t.fileList.push(dataURL);
        t.fileImage = dataURL;
      };
      reader.readAsDataURL(file);
      return false; // 必须false
    },
    upload() {
      this.$Message.success("开始上传");
      this.loadingStatus = true;
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
