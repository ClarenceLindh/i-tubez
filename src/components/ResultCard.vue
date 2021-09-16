<template>
  <div v-show="post.videoId" class="result-card">
    <h3>{{ post.name }}</h3>
    <div class="info">
      <button v-show="post.videoId" @click="play(post.videoId)">
        <i class="fas fa-play"></i>
      </button>
      <h4>{{ post }}</h4>
    </div>
  </div>
</template>

<script>
export default {
  name: "searchResults",

  props: ["post"],

  computed: {},

  methods: {
    play(id) {
      // calling global variable
      window.player.loadVideoById(id);
      window.player.playVideo();
      this.playing = true;
    },
  },
};
</script>

<style lang="scss" scoped>
.result-card {
  margin-bottom: 2vh;
}
</style>