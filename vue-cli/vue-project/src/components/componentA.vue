<template>
  <div>
    
    {{$store.state.count}}
    {{count}}
    <!--<button @click="$store.commit('add',10)">add</button>
    <button @click="$store.commit('reduce')">reduce</button>-->
    <!--<button @click="add(10)">add</button>
    <button @click="reduce">reduce</button>-->
    <button @click="add(10)">add</button>
    
    
  </div>
</template>

<script>
import ComponentB from "./ComponentB"
import ComponentC from "./ComponentC"
import {mapState} from 'vuex'

export default {
  data () {
    return {
      c:'11111'
    }
  },
  methods:{
  
  },
  computed:{
   ...mapState(["add","reduce"]),
   ...mapGetters(["addAction","reduceAction"])
  },
  components:{
    ComponentB,
    ComponentC
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
