<template>
  <div class="app-wrapper">
    <div class="app">
      <Navigation class="navigation" />
      <router-view />
    </div>
    <Player class="player" />
  </div>
</template>

<script>
import Navigation from "./components/Navigation";
import Player from "./components/Player.vue";

export default {
  name: "app",
  components: { Navigation, Player },

  
  mounted() {},
  
  methods: {
    
  },
  watch: {
    
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Quicksand", sans-serif;
}

body{
  background-color: black;
}

.app {
  display: flex;
  
  flex-direction: column;
  min-height: 100vh;
  color: #fff;
  background: black;
}

.link {
  cursor: pointer;
  text-decoration: none;
  text-transform: uppercase;
  color: black;
}

.link-light {
  color: #fff;
}

button,
.router-button {
  transition: 500ms ease all;
  cursor: pointer;
  margin-top: 24px;
  padding: 12px 24px;
  background-color: #303030;
  color: #fff;
  border-radius: 20px;
  border: none;
  text-transform: uppercase;

  &:focus {
    outline: none;
  }

  &:hover {
    background-color: rgba(48, 48, 48, 0.7);
  }
}

</style>
