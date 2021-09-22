<template>
  <div>
    <div class="song-card-wrap">
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
</template>

<script>
import SongCard from "../components/SongCard.vue";


export default {
  name: "Home",

  components: { SongCard },

  computed: {
    resultList() {
      return this.$store.state.songResultList;
    },
  },
};
</script>

<style lang="scss" scoped>
h2 {
  font-size: 50px;
  text-align: center;
}

.song-card-wrap{
  margin-bottom: 60px;
}

</style>