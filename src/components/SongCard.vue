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
  name: "songCard",

  props: ["post"],

  computed: {},

  methods: {
    play(id) {
      window.player.loadVideoById(id);
      window.player.playVideo();
      this.playing = true;
    },
  },
};
</script>

<style lang="scss" scoped>
.result-card {
  display: flex;
  margin-bottom: 2vh;
  flex-direction: column;
}
</style>