<template>
  <div>
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
import ArtistCard from "../components/ArtistCard.vue";

export default {
  name: 'Artists',

  components: { ArtistCard },

  computed: {
    resultList() {
      return this.$store.state.artistResultList;
    },
  },
};
</script>

<style lang="scss" scoped>
h2 {
  font-size: 50px;
  text-align: center;
}

.artist-card-wrap{
  margin-bottom: 60px;
}
</style>