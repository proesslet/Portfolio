<template>
  <div>
    <h1>Error 404</h1>
    <h1>The page you are looking for could not be found.</h1>
  </div>
</template>

<script>
export default {
  name: "PageNotFound",
  data() {
    return {};
  },
  methods: {},
  mounted() {},
};
</script>

<style scoped>
div {
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 50%;
  margin: auto;
}
h1 {
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0;
  padding: 0;
  line-height: 1;
}
</style>
