<style lang="scss" scoped>
  .songs__list__container{
    flex: 3;
    transition: all .3s ease-out;

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
      <li class="song__item" v-for="song in songs">
        {{song.title}}
        <span class="time">03:20</span>  
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data() {
      return{
        songs: [
          {title: 'Ime prve pjesme'},
          {title: 'Ime druge pjesme'}
        ]
      }
    },
    created () {
      console.log("Search component initialized");
    }
  }
</script>

