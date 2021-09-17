<template>
  <div  class="result-card">
    <h3>{{post.album.name}}</h3>
  </div>
</template>

<script>
export default {
  name: "albumCard",

  props: ["post"],

  computed: {},

  methods: {},
};
</script>

<style lang="scss" scoped>
.result-card {
  display: flex;
  flex-direction: column;
}
</style>