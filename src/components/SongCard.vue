<template>
  <div v-show="post.videoId" class="result-card">
    <div class="buttons">
      <button
        class="play-button"
        @click="
          addToPlaylist(post.videoId),
            addToCurrentSong(post.videoId),
            play(post.videoId),
            addDuration(post.duration)
        "
      >
        <i class="fas fa-play fa-2x"></i>
      </button>
      <button class="queue-button" @click="addToPlaylist(post.videoId)">
        <i class="fas fa-plus fa-2x"></i>
      </button>
      <button class="share-button" @click="copyLink(post.videoId)">
        <i class="far fa-copy fa-2x"></i>
      </button>
    </div>
    <h3 class="song-name">{{ post.name }} by {{ post.artist.name }}</h3>
    
    <img class="image" v-bind:src="post.thumbnails[1].url" alt="" />
  </div>
</template>

<script>
export default {
  name: "songCard",

  props: ["post"],

  computed: {},

  methods: {
    play(id) {
      if (window.player && window.player.loadVideoById) {
        window.player.loadVideoById(id);
        console.log("playing: ", id);
        this.$store.commit("setPlayingStatus", true)
      }
    },
    addToPlaylist(id) {
      this.$store.commit("setPlayList", id);
    },
    addToCurrentSong(id) {
      this.$store.commit("setCurrentSong", id);
    },
    addDuration(duration){
      this.$store.commit("setDuration", duration)
    },
    async copyLink(id) {
      try {
        await navigator.clipboard.writeText("localhost:8080/songs/" + id);
        console.log("localhost:8080/songs/" + id);
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
  height: 160px;
  margin-bottom: 0.5vh;
  margin-left: 10px;
  margin-right: 10px;
  background: #303030;
  color: #fff;
  border-radius: 10px;
  flex-direction: column;
  &:hover {
    background-color: rgba(48, 48, 48, 0.7);
    transform: scale(1.01);
  }
  @media (min-width: 800px) {
    flex-direction: row;
    height: 100px;
  }

  .song-name {
    margin-left: 10px;
    margin-top: 15px;
    justify-content: left;
    max-width: 40vw;
  }

  .name {
    margin-left: 10px;
    margin-top: 15px;
    justify-content: center;
  }

  .image {
    position: absolute;
    height: 160px;
    right: 0;
    object-fit: cover;
    border-radius: 0 10px 10px 0;
    @media (min-width: 800px) {
      transition: 500ms ease all;
      height: 100px;
    }
  }

  .play-button {
    height: 100%;
    margin-top: auto;
    color: black;
    background: #fff;
    margin-bottom: auto;
    border-radius: 10px 0 0 0;
    &:hover {
      color: #fff;
      background-color: rgba(48, 48, 48, 0.7);
    }
    &:active {
      transition: 500ms ease all;
      background-color: rgb(15, 15, 15);
    }
    @media(min-width: 800px){
      border-radius: 10px 0 0 10px;
    }
  }
  .queue-button {
    height: 100%;
    margin-top: auto;
    color: black;
    background: #fff;
    margin-bottom: auto;
    border-radius: 0;
    border-left: 1px solid black;
    border-right: 1px solid black;
    &:hover {
      color: #fff;
      background-color: rgba(48, 48, 48, 0.7);
    }
    &:active {
      transition: 500ms ease all;
      background-color: rgb(15, 15, 15);
    }
  }

  .share-button {
    height: 100%;
    margin-top: auto;
    color: black;
    background: #fff;
    margin-bottom: auto;
    border-radius: 0 0 10px 0;
    &:hover {
      color: #fff;
      background-color: rgba(48, 48, 48, 0.7);
    }
    &:active {
      transition: 500ms ease all;
      background-color: rgb(15, 15, 15);
    }
    @media(min-width: 800px){
      border-radius: 0;
    }
  }
}
</style>