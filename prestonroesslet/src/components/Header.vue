<template>
  <header>
    <img src="../assets/logo.png" alt="logo" />
    <nav>
      <ul>
        <li><router-link class="nav-link" to="/">Home</router-link></li>
        <li><router-link class="nav-link" to="/about">About</router-link></li>
        <li><a href="#">Projects</a></li>
        <li>
          <router-link class="nav-link" to="/contact">Contact</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {};
  },
  methods: {},
  mounted() {},
};
</script>

<style scoped>
img {
  height: 3rem;
  width: 3rem;
  margin: 0.5rem;
}
header {
  display: flex;
  margin: 0 0.5rem;
  align-items: center;
}
nav {
  margin-left: auto;
}
nav ul {
  display: flex;
  list-style: none;
  margin: auto 1rem;
  padding: 0;
}
nav li {
  margin-left: 1rem;
  margin-top: auto;
  margin-bottom: auto;
  font-size: 1.5rem;
}
a {
  text-decoration: none;
  color: var(--color-text);
}
</style>
