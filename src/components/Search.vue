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
  mounted:{
  },

  created() {},

  methods: {
    search(searchPhrase){
      this.$store.commit("setSearchPhrase", searchPhrase)
      this.$store.dispatch("fetchSongsBySearchPhrase")
      this.$store.dispatch("fetchArtistsBySearchPhrase")
      this.$store.dispatch("fetchAlbumsBySearchPhrase")
    }
  },

};
</script>

<style lang="scss" scoped>
input {
  width: 30vw;
  font-size: 18px;
  max-width: 400px;
  margin-top: 18px;
  margin-left: 25px;
  font-weight: 500;
  padding: 5px;
  border-radius: 5px;
  
}

.fa-search {
  margin-left: -25px;
  color: black;
}
</style>
