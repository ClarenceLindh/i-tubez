<template>
  <div class="player-wrapper">
    <button @click="previousSong()">
      <i class="fas fa-step-backward"></i>
    </button>
    <button @click="play()"><i class="fas fa-play"></i></button>
    <button @click="pause()"><i class="fas fa-pause"></i></button>
    <button @click="nextSong()"><i class="fas fa-step-forward"></i></button>
  </div>
</template>

<script>
export default {
  methods: {
    play() {
      window.player.loadVideoById();
      window.player.playVideo();
      console.log("Play");
    },
    pause() {
      window.player.pauseVideo();
      console.log("Pause");
    },
    nextSong() {
      var songList = this.$store.state.songList;
      var index = songList.findIndex(
        (song) => song === this.$store.state.currentSong
      );
      var nextSong = songList[index + 1];
      if (nextSong) {
        console.log("NextSong", nextSong);
        window.player.loadVideoById(nextSong);
        window.player.playVideo(nextSong);
        this.$store.commit("setCurrentSong", nextSong);
      } else {
        console.log("No next song");
      }
    },
    previousSong() {
      var songList = this.$store.state.songList;
      var index = songList.findIndex(
        (song) => song === this.$store.state.currentSong
      );
      var previouseSong = songList[index - 1];
      if (previouseSong) {
        console.log("previousSong", previouseSong);
        window.player.loadVideoById(previouseSong);
        window.player.playVideo(previouseSong);
        this.$store.commit("setCurrentSong", previouseSong);
      } else {
        console.log("No previous song");
      }
    },
  },

  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.player-wrapper {

  position: fixed;
  bottom: 0;
  width: 100%;
  text-align: center;
  background: rgba($color: #000000, $alpha: 0.9);
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