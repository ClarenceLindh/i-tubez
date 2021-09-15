<template>
  <div class="player-wrapper">
    <button @click="play('xg3J5slvB-k')">Play song 1</button>
    <button @click="play('CtkZxnkbjtI')">Play song 2</button>
    <button @click="play()">Resume</button>
    <button @click="pause()">Pause</button>
  </div>
</template>

<script>
export default {
  methods: {
    play(id) {
      // calling global variable
      window.player.loadVideoById(id);
      window.player.playVideo();
    },
    pause() {
      window.player.pauseVideo();
    },
  },
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
}

</style>