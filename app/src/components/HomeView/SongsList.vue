<style lang="scss" scoped>
  .songs__list__container{
    flex: 3;
    transition: all .3s ease-out;
    padding-bottom: 70px;
    margin-top:50px;

    .song__item{
      padding: 12px 15px;
      position: relative;
      counter-increment: customlistcounter;
      height:30px;
      line-height: 1.6;

      &:first-child(){
        counter-reset: customlistcounter;
      }
      &:before{
        content: counter(customlistcounter) " ";
        float: left;
        text-align: right;
        width: 1em;
        margin-right: 1em;
        font-size: 12px;
        font-weight: bold;
        opacity: 0.3;
        vertical-align: baseline;
        display: inline-block;
      }

      .time{
        font-size: 12px;
        font-weight: bold;
        opacity: 0.3;
        float: right;
      }
    }
  }
</style>

<template>
  <div class="songs__list__container" >
    <ul class="songs__list">
      <li class="song__item" v-for="track in tracks">
        {{track.title}}
        <span class="time">{{convertToTime(track.duration)}}</span>  
      </li>
    </ul>
  </div>
</template>

<script>
  import {mapState} from 'vuex'

  export default {
    data() {
      return{
     
      }
    },
    computed: mapState([
      'tracks'
    ]),

    methods:{
      convertToTime(milliseconds){
        const hours = Math.floor(milliseconds / 3600000);
        milliseconds = milliseconds % 3600000;

        const minutes = Math.floor(milliseconds / 60000);
        milliseconds = milliseconds % 60000;

        const seconds = Math.floor(milliseconds / 1000);
        milliseconds = Math.floor(milliseconds % 1000);

        const left = minutes < 10 ? `0${minutes}` : minutes;
        const right = seconds < 10 ? `0${seconds}` : seconds;

        return `${left}:${right}`;
          }
    },

    mounted(){
      this.$store.dispatch('LOAD_RECENT_TRACKS')
    }
   
  }
</script>

