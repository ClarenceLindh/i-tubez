<template>
  <div class="playlist">
    
    <p>{{playList}}</p>
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
    
    

  },
};
</script>

<style lang="scss" scoped>
.playlist {
  display: flex;
  transition: 500ms ease all;
  width: 100%;
  text-align: center;
  background: rgba($color: #000000, $alpha: 0.9);
  color: #fff;

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