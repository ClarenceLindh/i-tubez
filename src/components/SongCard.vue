<template>
  <div v-show="post.videoId" class="result-card">
    <button
      class="play-button"
      @click="
        addToSonglist(post.videoId),
          addToCurrentSong(post.videoId),
          play(post.videoId)
      "
    >
      <i class="fas fa-play fa-2x"></i>
    </button>
    <button class="share-button" @click="copyLink(post.videoId)">
      <i class="far fa-copy fa-2x"></i>
    </button>
    <h3 class="name">{{ post.artist.name }} -</h3>
    <h3 class="song-name">{{ post.name }}</h3>
    <img v-bind:src="post.thumbnails[1].url" alt="" />
  </div>
</template>

<script>
export default {
  name: "songCard",

  props: ["post"],

  computed: {},

  methods: {
    play(id) {
      console.log(id);
      window.player.loadVideoById(id);
      console.log(id);
    },
    addToSonglist(id) {
      this.$store.commit("setSongList", id);
    },
    addToCurrentSong(id) {
      this.$store.commit("setCurrentSong", id);
    },
    async copyLink(id) {
      try {
        await navigator.clipboard.writeText("localhost:8080/linkview/" + id);
        console.log("localhost:8080/linkview/" + id);
      } catch ($e) {
        console.log("Cannot copy song with viedoId: ", id);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.result-card {
  display: flex;
  position: relative;
  transition: 500ms ease all;
  height: 100px;
  margin-bottom: 0.5vh;
  margin-left: 10px;
  margin-right: 10px;
  background: #303030;
  color: #fff;
  border-radius: 10px;
  &:hover {
    background-color: rgba(48, 48, 48, 0.7);
    transform: scale(1.01);
  }
  @media (min-width: 800px) {
    flex-direction: row;
  }

  .song-name {
    margin-left: 10px;
    margin-top: 15px;
    justify-content: center;
  }

  .name {
    margin-left: 10px;
    margin-top: 15px;
    justify-content: center;
  }

  .album {
    margin-left: 10px;
    margin-top: 18px;
  }

  img {
    position: absolute;
    height: 100px;
    right: 0;
    object-fit: cover;

    border-radius: 0 10px 10px 0;
  }

  .play-button {
    height: 100%;
    margin-top: auto;
    color: black;
    background: #fff;
    margin-bottom: auto;
    border-radius: 10px 0 0 10px;
    &:hover {
      color: #fff;
      background-color: rgba(48, 48, 48, 0.7);
    }
    &:active {
      transition: ease-in 0.1s;
      background-color: rgb(15, 15, 15);
    }
  }
  .share-button {
    height: 100%;
    margin-top: auto;
    color: black;
    background: #fff;
    margin-bottom: auto;
    border-radius: 0 10px 10px 0;
    &:hover {
      color: #fff;
      background-color: rgba(48, 48, 48, 0.7);
    }
    &:active {
      transition: ease-in 0.1s;
      background-color: rgb(15, 15, 15);
    }
  }
}
</style>