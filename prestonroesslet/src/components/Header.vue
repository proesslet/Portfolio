<template>
  <header>
    <img src="../assets/logo.png" alt="logo" />
    <!--Make mobile nav-->
    <div class="nav-icon">
      <font-awesome-icon icon="bars" size="2x" @click="toggleNav()" />
    </div>
    <nav id="mobile-nav" class="nav-inactive">
      <ul>
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li>
          <router-link to="/about">About</router-link>
        </li>
        <li>
          <router-link to="/projects">Projects</router-link>
        </li>
        <li>
          <router-link to="/contact">Contact</router-link>
        </li>
      </ul>
    </nav>

    <!--Make desktop nav-->
    <nav id="desktop-nav">
      <ul>
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li>
          <router-link to="/about">About</router-link>
        </li>
        <li>
          <router-link to="/projects">Projects</router-link>
        </li>
        <li>
          <router-link to="/contact">Contact</router-link>
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
  methods: {
    toggleNav() {
      const nav = document.querySelector("#mobile-nav");
      nav.classList.toggle("nav-active");
      nav.classList.toggle("nav-inactive");
    },
  },
  mounted() {},
  components: {},
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

/* Mobile Nav */
.nav-icon {
  display: none;
  cursor: pointer;
  color: var(--color-text);
  margin: 0 0.5rem;
  padding: 0.5rem;
}
#desktop-nav {
  display: flex;
}
.nav-inactive {
  display: none;
}
.nav-active {
  display: flex;
  flex-direction: column;
  align-items: center;
}

@media only screen and (max-width: 500px) {
  header {
    flex-direction: column;
    align-items: center;
  }
  nav {
    margin: 0;
  }
  nav ul {
    flex-direction: column;
    align-items: center;
  }
  nav li {
    margin: 0.5rem;
  }

  img {
    margin: 0.5rem 0;
  }

  .nav-icon {
    display: block;
  }

  #desktop-nav {
    display: none;
  }
}
</style>
