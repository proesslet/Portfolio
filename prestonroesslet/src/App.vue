<script>
import Header from "./components/Header.vue";

export default {
  name: "App",
  components: {
    Header,
  },
  data() {
    return {};
  },
  methods: {},
  mounted() {},
};
</script>

<template>
  <div id="app">
    <Header />
    <router-view />
  </div>
</template>

<style scoped></style>
