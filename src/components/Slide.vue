<!-- The ref attr used to find the swiper instance -->
<template>
  <div>
    <router-link to="/tab/100">Go to tab</router-link>
    <swiper
      :options="swiperOption"
      ref="mySwiper"
      @transitionStart="transitionStart"
      @reachBeginning="reachBeginning"
      @slideChange="slideChange"
      @reachEnd="reachEnd"
      @fromEdge="fromEdge"
    >
      <!-- slides -->
      <swiper-slide class="orange-slide" v-for="(slide,i) in slideList" :key="i">{{slide}}</swiper-slide>

      <!-- <swiper-slide class="orange-slide">I'm Slide 1</swiper-slide>
      <swiper-slide class="red-slide">I'm Slide 2</swiper-slide>-->
      <!-- <swiper-slide class="blue-slide">I'm Slide 3</swiper-slide> -->
      <!-- Optional controls -->
      <!-- <div class="swiper-pagination"  slot="pagination"></div>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
      <div class="swiper-scrollbar"   slot="scrollbar"></div>-->
    </swiper>
  </div>
</template>

<script>
var slideList = ["I'm Slide x", "I'm Slide y"];
export default {
  name: "carrousel",
  data() {
    return {
      slideTimes: 0,
      maxLen: 6,
      begin: 1,
      slideList: slideList,
      swiperOption: {
        // some swiper options/callbacks
        // 所有的参数同 swiper 官方 api 参数
        // ...
        loop: false
      }
    };
  },
  methods: {
    callback() {},
    fromEdge: function() {
      //console.log("fromEdge");
    },
    reachEnd: function() {
      // if (!this.params.debugger) return;
      // console.log("reachEnd");
      if (this.begin < this.maxLen) {
        this.slideList.push("I'm Slide " + this.begin++);
      }
    },
    reachBeginning: function() {
      //console.log("reachBeginning");
    },
    touchEnd: function() {
      //你的事件
      //alert(this.previousIndex+'-'+this.activeIndex);
    },
    slideChange: function() {
      //console.log("slideChange", this.previousIndex, "->", this.activeIndex);
    },
    transitionStart: function() {
      //console.log("transitionStart");

      // 左边

      // 右边
      //alert( this.$refs.mySwiper.swiper.previousIndex+'-'+ this.$refs.mySwiper.swiper.activeIndex);
      // if(this.$refs.mySwiper.swiper.activeIndex==1){
      //    this.$refs.mySwiper.swiper.slideTo(0, 1000, false)
      // }
      //alert('transitionEnd');
      if (this.slideTimes == 5) {
        //alert('结束了');
        this.slideTimes = 0;
      }
      this.slideTimes++;
    }
  },

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
.blue-slide {
  background: #4390ee;
}
.red-slide {
  background: #ca4040;
}
.orange-slide {
  background: #ff8604;
}
.swiper-slide {
  line-height: 300px;
  color: #fff;
  font-size: 36px;
  text-align: center;
}
</style>