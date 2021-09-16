<template>
  <div class="result-card">
    <h3>{{post.name}}</h3>
    <img src="" alt="">
    <div class="info">
      <h4>{{ post }}</h4>
    </div>
  </div>
</template>

<script>
export default {
  name: "searchResults",
  props: ["post"],


  
};
</script>

<style lang="scss" scoped>
.result-card{
  margin-bottom: 2vh;
}

</style>