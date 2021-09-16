<template>
<div>
  <h1>Home</h1>
  <Player/>
  
  
  </div>
</template>

<script>
import Player from "../components/Player.vue"


export default {
 name: "Home",

 

 components: { Player,  },

 computed: {
   resultList() {
     return this.$store.state.resultList;
   }
 }

}
</script>

<style>

</style>