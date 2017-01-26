<style lang="scss" scoped>
  .wrapper{
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  .aplayer{
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    background:#3F51B5;
  }
</style>

<template>
  <div class="wrapper">
    <Search />
    <SongsList />
    <Player />
  </div>
</template>

<script>
  import Search from './HomeView/Search.vue'
  import SongsList from './HomeView/SongsList.vue'
  import Player from './HomeView/Player.vue'

  export default {
    components:{
      Search,
      SongsList,
      Player
    },
    name: 'Home'
  }
</script>