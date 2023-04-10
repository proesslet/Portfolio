<template>
  <div class="projectCard">
    <h1>{{ title }}</h1>
    <p>{{ description }}</p>
    <a :href="link" target="_blank">View Project</a>
    <img :src="getImageUrl(image)" alt="project image" />
  </div>
</template>

<script>
export default {
  name: "ProjectCard",
  props: ["title", "description", "image", "link"],
  data() {
    return {};
  },
  methods: {
    getImageUrl(fileName) {
      return new URL("/src/assets/" + fileName, import.meta.url);
    },
  },
  mounted() {},
};
</script>

<style scoped>
.projectCard {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 0.5rem;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  overflow: hidden;
  transition: all 0.3s;
  width: 100%;
  max-width: 30rem;
  height: 100%;
  text-align: center;
  padding: 1.5rem;
  border: 1px solid #e43d36;
  margin: 1rem auto;
}
h1 {
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0;
  padding: 0;
  line-height: 1;
}
p {
  font-size: 1rem;
  margin: 0;
  padding: 0;
}
a {
  font-size: 1rem;
  margin: 0;
  padding: 0;
  text-decoration: none;
  color: var(--color-primary);
  text-decoration: underline;
}
.projectCard:hover {
  transform: scale(1.05);
}

img {
  width: 100%;
  height: auto;
  object-fit: cover;
  max-width: 10rem;
  margin: 1rem auto;
}

@media screen and (max-width: 500px) {
  .projectCard {
    width: 100%;
    max-width: 100%;
  }

  img {
    max-width: 60%;
  }

  h1 {
    font-size: 1.25rem;
  }

  p {
    font-size: 0.75rem;
  }

  a {
    font-size: 0.75rem;
  }
}
</style>
