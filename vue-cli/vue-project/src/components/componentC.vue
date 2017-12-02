<template>
  <div >
    <button @click="btn">
    change
    </button>
  </div>
</template>

<script>
export default {
  methods:{
    btn(){
      this.$emit('change','12345');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
