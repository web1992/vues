<template>
  <div>
    <!-- <Slider v-model="value" range/> -->
    <i-switch v-model="switch1" @on-change="change"/>
    <Icon type="ios-checkmark" size="50"/>
    <Icon type="ios-create-outline" size="50"/>
  </div>
</template>
<script>
import "iview/dist/styles/iview.css";
export default {
  data() {
    return {
      value: [20, 50],
      switch1: true
    };
  },
  methods: {
    change(state) {
      alert(state);
    }
  }
};
</script>