<template>
  <div class="search"><input type="text" placeholder="Search " />
  <i class="fas fa-search"></i></div>
</template>

<script>
export default {
  name: "Search",
  components: {},
  data() {},
  created() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
input {
  width: 40vw;
  max-width: 400px;
  margin-left: 20vw;
  font-weight: 500;
  padding: 5px;
}

.fa-search{
  margin-left: -25px;
}

</style>
