<template>
  <div>
    <h1>Home</h1>
    <div class="result-card-wrap">
      <div class="container">
        <ResultCard
          :post="result"
          v-for="(result, index) in samplePost"
          :key="index"
        />
        {{ samplePost }}
        {{ resultList }}
      </div>
    </div>
    <Player />
  </div>
</template>

<script>
import Player from "../components/Player.vue";
import ResultCard from "../components/ResultCard.vue";

export default {
  name: "Home",

  components: { Player, ResultCard },

  data() {
    return {};
  },

  computed: {
    resultList() {
      return this.$store.state.resultList;
    },
    samplePost() {
      return this.$store.state.samplePost;
    },
  },
};
</script>

<style lang="scss" scoped>
.result-card-wrap {
  h3 {
    font-weight: 300;
    font-size: 28px;
    margin-bottom: 32px;
  }
}

.updates {
  .container {
    padding: 100px 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (min-width: 800px) {
      padding: 125px 25px;
      flex-direction: row;
    }

    .router-button {
      display: flex;
      font-size: 14px;
      text-decoration: none;
      @media (min-width: 800px) {
        margin-left: auto;
      }
    }

    h2 {
      font-weight: 800;
      font-size: 32px;
      max-width: 425px;
      width: 100%;
      text-align: center;
      text-transform: uppercase;
      @media (min-width: 800px) {
        text-align: initial;
        font-size: 40px;
      }
    }
  }
}
</style>