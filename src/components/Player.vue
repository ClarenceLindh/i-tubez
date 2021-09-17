<template>
  <div class="player-wrapper">
    <button @click="play()"><i class="fas fa-play"></i></button>
    <button @click="pause()"><i class="fas fa-pause"></i></button>
  </div>
</template>

<script>
export default {
  methods: {
    play() {
      window.player.loadVideoById();
      window.player.playVideo();
    },
    pause() {
      window.player.pauseVideo();
    },
  },

  data(){
    return {
    }
  }
};
</script>

<style lang="scss" scoped>

.player-wrapper {
 display: flex;
 position: fixed;
 bottom: 0;
 width: 100%;
 justify-content: center;
 background: rgba($color: #000000, $alpha: .9);
 margin-left: 5px;
 margin-right: 60px;
}

button {
 margin-bottom: 10px;
 margin-top: 10px;
 margin-left: 2px;
 margin-right: 2px;
}

</style>