<template>
    <div class='player'>
    <a-player :music="music" :narrow="false" 
    :autoplay="true"showlrc="3" :mutex="true" 
    theme="#ff0000"listmaxheight="513px" 
    v-if="isShow"></a-player>
    <!--{{$route.params.id}}-->
    </div>
</template>

<script>
import Axios from "axios"
import APlayer from "vue-aplayer"

export default {
  data () {
    return {
     musicData:[],
     musicList:[],
     isShow: false,
     music:{
           "title":"成都",
            "author":"赵雷",
            "src":"http://sc1.111ttt.com/2016/1/12/04/205041718593.mp3",
            "musicImgSrc": "http://p4.music.126.net/34YW1QtKxJ_3YnX9ZzKhzw==/2946691234868155.jpg",
            "lrc":"成都-赵雷.lrc"
        }
    }
  },
   mounted(){
     Axios.get('/static/music-data.json')
     .then((res)=>{
         this.musicData = res.data.musicData;
         for(var i=0;i<this.musicData.length;i++){
             var obj = new Object();
                obj.title = this.musicData[i].title;
                obj.author = this.musicData[i].author;
                obj.url = this.musicData[i].src;
                obj.pic = this.musicData[i].lrc;
                this.musicList.push(obj);
         }
         this.isShow = true;
     });
 
  },
  components:{
      APlayer
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .player{
        margin-top: 1rem;
    }
</style>
