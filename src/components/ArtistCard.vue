<template>
  <div class="result-card">
    <h3>{{ post.name }}</h3>
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
  margin-bottom: 4px;
  

  .info {
    max-width: 100vw;
  }
}
</style>