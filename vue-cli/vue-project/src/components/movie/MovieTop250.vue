<template>
    <div class='list'>
    <movie-list v-for="(obj,index) in MovieList " :key="index" :title='obj.nm':year='obj.snum' 
    :avg = "obj.sc" :img = "obj.img" :desc = "obj.cat"
    ></movie-list>
    </div>
</template>

<script>
import MovieList from "./MovieList"
export default {
  data () {
    return {
     MovieList[]
    }
  },
   mounted(){
      let _this = this;
      window.onscroll = function(){
          let scrollTop = document.documentElement.scrollTop;
          let clientHeight = document.documentElement.clientHeight;
          let htmlHeight = document.documentElement.scrollHeight;
          if(scrollTop + clientHeight >= htmlHeight){
              _this.isShow = true;
              _this.loadData();
          }
      }
      this.loadData();
 
  },
  methods:{
      loadData(){
        Axios.get(API_PROXY + "http://m.maoyan.com/movie/list.json?type=hot&offset="+this.MovieList.length+"&limit=10")
        .then((res)=>{
            this.MovieList = this.MovieList.concat(res.data.data.movies);
            this.isShow = false;
        });

      } 
  },
  components:{
      MOvieList[]
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .list{
       margin: 2rem 0 1.6rem;
    }
</style>
