<template>
  <div class="search-wrapper">
    <input 
      id="search-bar" 
      type="text" 
      placeholder="Search..." 
      v-on:keyup="search(searchPhrase)"
      v-model="searchPhrase"
    >
    <i class="fas fa-search"/>
  </div>
</template>

<script>
export default {
  name: "Search",

  components: {},

  data()  {
    return {
      searchPhrase: this.searchPhrase
    }
  },

  created() {},

  methods: {
    search(searchPhrase){
      this.$store.commit("setSearchPhrase", searchPhrase)
      this.$store.dispatch("fetchBySearchPhrase")
    }
  },

};
</script>

<style lang="scss" scoped>
input {
  width: 40vw;
  max-width: 400px;
  margin-left: 20vw;
  font-weight: 500;
  padding: 5px;
}

.fa-search {
  margin-left: -25px;
}
</style>
