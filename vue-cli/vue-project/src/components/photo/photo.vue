<template>
  <div class="music">
    <common-header title="photo" bgColor="rgb(63, 81, 181)"></common-header>
    <common-footer bgColor="rgb(63, 81, 181)"></common-footer>
    
  </div>
</template>

<script>
import CommonHeader from "../common/CommonHeader"
import CommonFooter from "../common/CommonFooter"

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
