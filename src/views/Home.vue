<template>
<div>
  <h1>Home</h1>
  <Player/>
  <SearchResults/>
  </div>
</template>

<script>
import Player from "../components/Player.vue"
import SearchResults from "../components/SearchResults.vue"

export default {
 name: "Home",

 components: { Player, SearchResults },

}
</script>

<style>

</style>