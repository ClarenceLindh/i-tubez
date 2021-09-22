<template>
  <div v-show="post.videoId" class="result-card">
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe praesentium voluptas dolorem molestiae vitae nihil vel magni tempora, modi ad dolor, eaque dignissimos ratione ab veritatis rerum? Velit, molestias qui!</p>
  </div>
</template>

<script>
export default {
  name: "Playlist",

  props: ["post"],

  computed: {
    resultList() {
      return this.$store.getters.getSongResultList;
    },
    playList() {
      return this.$store.getter.getSongList;
    }
  },

  methods: {
    async copyLink(id) {
      try {
        await navigator.clipboard.writeText("localhost:8080/songs/" + id);
        console.log("localhost:8080/songs/" + id);
      } catch ($e) {
        console.log("Cannot copy song with viedoId: ", id);
      }
    },
    getSongInfo(){

    },

  },
};
</script>

<style lang="scss" scoped>
.result-card {
  display: flex;
  position: relative;
  transition: 500ms ease all;
  height: 160px;
  margin-bottom: 0.5vh;
  margin-left: 10px;
  margin-right: 10px;
  background: #303030;
  color: #fff;
  border-radius: 10px;
  flex-direction: column;
  &:hover {
    background-color: rgba(48, 48, 48, 0.7);
    transform: scale(1.01);
  }
  @media (min-width: 800px) {
    flex-direction: row;
    height: 100px;
  }

  .song-name {
    margin-left: 10px;
    margin-top: 15px;
    justify-content: left;
    max-width: 40vw;
  }

  .name {
    margin-left: 10px;
    margin-top: 15px;
    justify-content: center;
  }

  .image {
    position: absolute;
    height: 160px;
    right: 0;
    object-fit: cover;
    border-radius: 0 10px 10px 0;
    @media (min-width: 800px) {
      transition: 500ms ease all;
      height: 100px;
    }
  }

  .share-button {
    height: 100%;
    margin-top: auto;
    color: black;
    background: #fff;
    margin-bottom: auto;
    border-radius: 0 10px 10px 0;
    &:hover {
      color: #fff;
      background-color: rgba(48, 48, 48, 0.7);
    }
    &:active {
      transition: 500ms ease all;
      background-color: rgb(15, 15, 15);
    }
    @media (min-width: 800px) {
      border-radius: 0;
    }
  }
}
</style>