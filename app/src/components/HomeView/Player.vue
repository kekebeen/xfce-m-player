<style lang="scss" scoped>
  .player{
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background: #333;

    .player__header{
      display: flex;
      flex-direction:row;
    }
  }
</style>

<template>
  <div class="player">
    <div class="player__header">

      <div class="player__img">
        <img :src="currentTrack.pic" />
      </div>

      <div class="player__info">
        <h4>{{currentTrack.title}}</h4>
        <h5>{{currentTrack.author}}</h5>
      </div>
      
    </div>
     <audio id="audio" ref="audio" autoplay controls>
      <source :src="currentTrack.url" />
    </audio>
    
  </div>
</template >

<script>
  import {mapState, mapGetters} from 'vuex'

  export default {
    data() {
      return{
        loading: false,
        currentTrack: 
          {
          "title": '',
          "author": '',
          "url": '',
          "pic": '',
          "lrc": ''
        }
      }
    },

   computed: {
     recentTracks() {
       return this.$store.state.tracks
     },
     currentTrackUrl() {
       return this.currentTrack.url; 
     }
    },

    methods:{
      getRandomTrack (){
       let tracksLength = this.recentTracks.length;
       let randomNumber = Math.floor((Math.random() * tracksLength) +1)
       let currentTrack = this.recentTracks[randomNumber];

       this.currentTrack.title = currentTrack.title;
       this.currentTrack.author = currentTrack.author;
       this.currentTrack.url = currentTrack.url;
       this.currentTrack.pic = currentTrack.pic;
       this.currentTrack.lrc = currentTrack.duration;
       
      }
    
    },

    mounted(){
    let player = this.$refs.audio;
      
      setTimeout(() => {
        console.log("inside setInterval");
        this.getRandomTrack();
        player.load();
        
    }, 50); 
    
    },

    components: {
    }
   
  }
</script>

