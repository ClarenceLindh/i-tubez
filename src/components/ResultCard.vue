<template>
  <div class="result-card">
    <h2>ResultCard</h2>
    <div class="info">
      <h4>{{ post.id }}</h4>
    </div>
  </div>
</template>

<script>
export default {
  name: "searchResults",
  props: ["post"],

  getResultList() {
    return this.$store.state.getResultList;
    
  },
};
</script>

<style lang="scss" scoped>

</style>