<style lang="scss" scoped>
  
</style>

<template>
 
 <div class="audio-player">
  <div id="play-btn"></div>
  <div class="audio-wrapper" id="player-container" href="javascript:;">
    <audio id="player" ontimeupdate="initProgressBar()">
			  <source src="http://www.lukeduncan.me/oslo.mp3" type="audio/mp3">
			</audio>
  </div>
  <div class="player-controls scrubber">
    <p>Oslo <small>by</small> Holy Esque</p>
    <span id="seekObjContainer">
			  <progress id="seekObj" value="0" max="1"></progress>
			</span>
    <br>
    <small style="float: left; position: relative; left: 15px;" class="start-time"></small>
    <small style="float: right; position: relative; right: 20px;" class="end-time"></small>

  </div>
  <div class="album-image">
    <img :src="currentTrack.pic" />
  </div>
</div>
 
</template>

<script>
  import {mapState} from 'vuex'

  export default {
    data() {
      return{
        trake: [],
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

    computed: mapState([
        'tracks'
      ]),

    methods:{
      getRandomTrack (){
       let tracksLength = this.tracks.length;
       let randomNumber = Math.floor((Math.random() * tracksLength) +1)
       let currentTrack = this.tracks[randomNumber];

       console.log(currentTrack);
       this.currentTrack.title = currentTrack.title;
       this.currentTrack.author = currentTrack.author;
       this.currentTrack.url = currentTrack.url;
       this.currentTrack.pic = currentTrack.pic;
       this.currentTrack.lrc = '[00:00.00]lrc here\n[00:01.00]aplayer';

       console.log(tracksLength,randomNumber)
       console.log(currentTrack);
      },

      getCurrentSongUrl() {
        return 'background-image:url( + #{this.currentTrack.url} + )'
      },

      getCurrentSongBg(){
        return this.currentTrack.pic
      }
    },

    mounted(){
      setTimeout(() => {
        console.log("inside setInterval");
        this.getRandomTrack();
    }, 500); 

    let player = this.$refs.audio;
    
    },

    components: {
    }
   
  }
</script>

