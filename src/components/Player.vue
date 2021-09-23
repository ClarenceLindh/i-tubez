<template>
  <div class="player-wrapper">
    <button id="previous" @click="previousSong()">
      <i class="fas fa-step-backward"></i>
    </button>
    <button v-show="!playingStatus" id="play" @click="play()">
      <i class="fas fa-play"></i>
    </button>
    <button v-show="playingStatus" id="pause" @click="pause()">
      <i class="fas fa-pause"></i>
    </button>
    <button id="next" @click="nextSong()">
      <i class="fas fa-step-forward"></i>
    </button>
    <Playlist />
  </div>
</template>

<script>
import Playlist from "./Playlist.vue";
export default {
  name: "player",

  components: {
    Playlist,
  },



  methods: {

    play() {
      window.player.playVideo();
      console.log("Pressed Play");
      if (this.$store.state.currentSong)
        this.$store.commit("setPlayingStatus", true);
    },

    pause() {
      window.player.pauseVideo();
      console.log("Pressed Pause");
      this.$store.commit("setPlayingStatus", false);
    },

    nextSong() {
      var nextSong =
        this.$store.getters.getSongList[
          this.$store.getters.getSongList.findIndex(
            (song) => song === this.$store.state.currentSong
          ) + 1
        ];
      if (nextSong) {
        console.log("NextSong", nextSong);
        window.player.loadVideoById(nextSong);
        window.player.playVideo(nextSong);
        this.$store.commit("setCurrentSong", nextSong);
        this.$store.commit("setPlayingStatus", true);
      } else {
        console.log("No next song");
      }
    },

    previousSong() {
      var previouseSong =
        this.$store.getters.getSongList[
          this.$store.getters.getSongList.findIndex(
            (song) => song === this.$store.state.currentSong
          ) - 1
        ];
      if (previouseSong) {
        console.log("previousSong", previouseSong);
        window.player.loadVideoById(previouseSong);
        window.player.playVideo(previouseSong);
        this.$store.commit("setCurrentSong", previouseSong);
        this.$store.commit("setPlayingStatus", true);
      } else {
        console.log("No previous song");
      }
    },
  },

  computed: {
    playingStatus() {
      return this.$store.getters.getPlayingStatus;
    },
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