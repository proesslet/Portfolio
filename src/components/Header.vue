<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="navbar-brand">
      <img id="logoImage" src="../assets/logo.png" />
    </div>

    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNavDropdown"
      aria-controls="navbarNavDropdown"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item active">
          <router-link class="nav-link" to="/">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/about">About</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/projects">Projects</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/contact">Contact</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
#logoImage {
  height: 3rem;
  width: 3rem;
  margin: 0.5rem;
}

p {
  font-size: 1rem;
  margin: 0;
  padding: 0;
}
h1 {
  font-size: 4rem;
  font-weight: 700;
  margin: 0;
  padding: 0;
  line-height: 1;
}
h2 {
  font-size: 3rem;
  font-weight: 400;
  margin: 0;
  padding: 0;
  line-height: 1;
}
</style>
