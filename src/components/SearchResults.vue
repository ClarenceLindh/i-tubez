<template>
  <div>
    <h2>Search results</h2>
    <div class="result-wrapper">
      
      <ul>
        <li>test</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchResults",

  getResultList() {
    return this.$store.state.getResultList;
  },
};
</script>

<style lang="scss" scoped>
</style>