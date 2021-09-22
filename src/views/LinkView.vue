<template>
  <div>
    <h1>Shared</h1>
    <div>
      {{ url_data }}
    </div>
    <div>
    <div class="song-card-wrap" v-show="resultList.content.type = 'song'">
      <div class="container">
        <h2 class="songs-title">Songs</h2>
        <SongCard
          :post="result"
          v-for="(result, index) in resultList.content"
          :key="index"
        />
      </div>
    </div>
  </div>
  </div>
</template>
<script>
import SongCard from "../components/SongCard.vue";

export default {
  name: "LinkView",

  components: { SongCard },

  mounted(){
    this.url_data = this.$route.params.id
    this.search(this.url_data)
    this.resultList()
  },

  data(){
    return {
      url_data: null
    };
  },
  methods: {
    search(url_data) {
      this.$store.commit("setSearchPhrase", url_data);
      this.$store.dispatch("fetchSongsBySearchPhrase");
      this.$store.dispatch("fetchArtistsBySearchPhrase");
      this.$store.dispatch("fetchAlbumsBySearchPhrase");
    },
  },
  computed:{
    resultList() {
      return this.$store.state.songResultList;
    },
  },
};
</script>

<style>
</style>