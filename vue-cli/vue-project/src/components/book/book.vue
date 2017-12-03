<template>
  <div class="music">
    <common-header title="book" bgColor="rgb(121, 85, 72)"></common-header>
    <swipe class="my-swipe">
        <swipe-item class="slide1"></swipe-item>
        <swipe-item class="slide2"></swipe-item>
        <swipe-item class="slide3"></swipe-item>
    </swipe>
    <common-footer bgColor="rgb(121, 85, 72)"></common-footer>
    
  </div>
</template>

<script>
import CommonHeader from "../common/CommonHeader"
import CommonFooter from "../common/CommonFooter"
import {Swipe,SwipeItem} from "vue-swipe"
import {Icon} from "antd"
export default {
  data () {
    return {
     
    }
  },
  components:{
      CommonHeader,
      CommonFooter,
      Swipe,
      SwipeItem
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../../assets/css/vue-swipe";
.my-swipe{
    height: 200px;
    color: #fff;
    font-size:30px;
    text-align: center;
    margin-top:1rem;
}
.slide1{
  background:url('https://img3.doubanio.co/lpic/s24468373.jpg');
  color:#fff;
}
.slide2{
  background:url('https://img3.doubanio.com/lpic/s27102925.jpg');
  color:#000;
}
.slide3{
  background:url('https://img3.doubanio.com/lpic/s6989253.jpg');
}
</style>
