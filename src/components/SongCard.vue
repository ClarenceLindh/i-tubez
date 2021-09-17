<template>
  <div v-show="post.videoId" class="result-card">
    <button v-show="post.videoId" @click="play(post.videoId)">
      <i class="fas fa-play fa-2x"></i>
    </button>
    <h3 class="name">{{ post.name }}</h3>
    <h4 class="album">{{ post.album.name }}</h4>
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
      window.player.loadVideoById(id);
    },
  },
};
</script>

<style lang="scss" scoped>
.result-card {
  display: flex;
  position: relative;
  height: 100px;
  margin-bottom: 0.5vh;
  flex-direction: row;
  background: #303030;
  color: #fff;
  border-radius: 10px;
  @media (min-width: 800px) {
    flex-direction: row;
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

  

  button {
    height: 100px;
    margin-top: auto;
    color: black;
    background: #fff;
    margin-bottom: auto;
    border-radius: 10px;
  }
}
</style>