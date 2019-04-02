<!-- The ref attr used to find the swiper instance -->
<template>
  <div class="swiper-body">
    <!-- Swiper -->
    <!-- <div class="swiper-container"> -->
    <div class="swiper-wrapper">
      <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div>
      <swiper :options="swiperOption" ref="mySwiper">
        <swiper-slide class="orange-slide" v-for="(slide,i) in slideList" :key="i">{{slide}}</swiper-slide>
      </swiper>
    </div>
    <!-- Add Pagination -->
    <!-- <div class="swiper-pagination"></div> -->
    <!-- Add Arrows -->

    <!-- </div> -->
  </div>
</template>

<script>
var slideList = ["2000", "3000", "5000", "7000", "8000"];
export default {
  name: "carrousel",
  data() {
    return {
      slideList: slideList,
      swiperOption: {
        // some swiper options/callbacks
        // 所有的参数同 swiper 官方 api 参数
        // ...
        loop: false,
        slidesPerView: 4, // 控制显示个数
        // centeredSlides: true,// 控制居中
        spaceBetween: 10,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      }
    };
  },
  methods: {},
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  mounted() {
    // current swiper instance
    // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
    //this.console.log('this is current swiper instance object', this.swiper)
    //this.swiper.slideTo(3, 1000, false)
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.swiper-body {
  height: 20px;
}
.orange-slide {
  background-color: #ff8604;
  /* width: 30px; */
  border: solid #ff8604;
  height: 20px;
}
.swiper-button-next {
  height: 15px;
}
.swiper-button-prev {
  height: 15px;
}
.swiper-wrapper {
  height: 60px;
}
.swiper-container {
  width: 100%;
  height: 20px;
  margin: 20px auto;
  background-color: rgb(214, 202, 35);
}
.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}
</style>