<template>
  <div>
    <h1>Shared</h1>
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
    <div class="artist-card-wrap">
      <h2>Artists</h2>
      <ArtistCard
        :post="result"
        v-for="(result, index) in resultList.content"
        :key="index"
      />
    </div>
  </div>
</template>
<script>
import SongCard from "../components/SongCard.vue";
import ArtistCard from "../components/ArtistCard.vue";


export default {
  name: "LinkView",

  components: { SongCard, ArtistCard },

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
      console.log(this.$store.state.songResultList)
      return this.$store.state.songResultList;
    },
  },
};
</script>

<style>
</style>