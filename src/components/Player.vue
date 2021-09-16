<template>
  <div class="player-wrapper">
    <button @click="play('xg3J5slvB-k')">Play song 1</button>
    <button @click="play('CtkZxnkbjtI')">Play song 2</button>
    <button v-show="!playing" @click="play()"><i class="fas fa-play"></i></button>
    <button v-show="playing" @click="pause()"><i class="fas fa-pause"></i></button>
  </div>
</template>

<script>
export default {
  methods: {
    play(id) {
      // calling global variable
      window.player.loadVideoById(id);
      window.player.playVideo();
      this.playing = true;
    },
    pause() {
      window.player.pauseVideo();
      this.playing = false;
    },
  },
  data(){
    return {
      playing: false,
    }
  }
};
</script>

<style lang="scss" scoped>

.player-wrapper {
 display: flex;
 position: absolute;
 bottom: 0;
 width: 100%;
 justify-content: center;
}

button {
 margin-bottom: 5px;
 margin-left: 2px;
 margin-right: 2px;
}

</style>