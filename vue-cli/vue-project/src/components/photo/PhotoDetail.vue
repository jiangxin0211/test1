<template>
  <div class="detail">
    <common-header title="photo" nav="<" bgColor="rgb(63, 81, 181)"></common-header>
      <v-touch class='photo-detail' :style="{background:bg}"
        @swipeleft='left' @swiperight='right'>
      </v-touch>
    <common-footer bgColor="rgb(63, 81, 181)"></common-footer>
    
  </div>
</template>

<script>
import CommonHeader from "../common/CommonHeader"
import CommonFooter from "../common/CommonFooter"
import {mapState} from "vuex"
import Axios from "axios"
export default {
  data () {
    return {
     aa:this.$router.params.index
    //  photoData:this.$store.state.photoData
    }
  },
  computed:{
    bg(){
      return "url("+ this.$store.state.photoData[this.aa].src +") no-repeat center / contain #000"
    },
    ...mapState(['photoData'])
  },
  methods:{
    left(){
      this.aa++;
    },
    right(){
      this.aa--;
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
   .photo-detail{
     position: absolute;
     top: 1rem;
     bottom: 0;
     width: 100%;
   }
</style>
