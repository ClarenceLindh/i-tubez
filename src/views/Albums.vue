<template>
  <div>
    <div class="album-card-wrap">
      <h2>Albums</h2>
      <AlbumCard
        :post="result"
        v-for="(result, index) in resultList.content"
        :key="index"
      />
    </div>
  </div>
</template>

<script>
import AlbumCard from "../components/AlbumCard.vue";

export default {
  name: 'Albums',

  components: { AlbumCard },

  computed: {
    resultList() {
      return this.$store.getters.getAlbumsResultList;
    },
  }
};
</script>

<style lang="scss" scoped>
h2 {
  font-size: 50px;
  text-align: left;
}

.album-card-wrap{
  margin-bottom: 60px;
}

</style>