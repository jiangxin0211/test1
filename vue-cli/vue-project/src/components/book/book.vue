<template>
  <div class="music">
    <common-header title="book" bgColor="rgb(121, 85, 72)"></common-header>
    <common-footer></common-footer>
    
  </div>
</template>

<script>
import CommonHeader from "../common/CommonHeader"
import CommonFooter from "../common/CommonFooter"
import {Swipe,SwipeItem} from "../book/"
export default {
  data () {
    return {
     
    }
  },
  components:{
      CommonHeader,
      CommonFooter
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
   
</style>
