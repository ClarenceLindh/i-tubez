<template>
  <div v-show="post.type = 'album'"  class="result-card">
    <button class="share-button"><i class="far fa-copy fa-2x"></i></button>
    <h3 class="name">{{post.album.name}}</h3>
    <img v-bind:src="post.thumbnails[1].url" alt="" />
  </div>
</template>

<script>
export default {
  name: "albumCard",

  props: ["post"],

  computed: {},

  methods: {},
};
</script>

<style lang="scss" scoped>
.result-card {
  display: flex;
  position: relative;
  transition: 500ms ease all;
  height: 100px;
  margin-bottom: 0.5vh;
  margin-left: 5px;
  margin-right: 10px;
  flex-direction: row;
  background: #303030;
  color: #fff;
  border-radius: 10px;
  
  &:hover {
    background-color: rgba(48, 48, 48, 0.7);
    transform: scale(1.02);
  }
  @media (min-width: 800px) {
    flex-direction: row;
  }

  .name {
    margin-left: 10px;
    margin-top: 15px;
    text-align: left;
    max-width: 25vw;
  }


  img {
    position: absolute;
    height: 100px;
    right: 0;
    object-fit: cover;
    border-radius: 0 10px 10px 0;
  }

  .share-button{
    height: 100px;
    margin-top: auto;
    color: black;
    background: #fff;
    margin-bottom: auto;
    border-radius: 10px 0 0 10px;
    &:hover {
      color: #fff;
      background: #1d1d1d;
    }
  }
}
</style>