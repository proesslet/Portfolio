<template>
  <h1>Below are some of the projects I have worked on!</h1>
  <p>
    Feel free to
    <router-link id="contact-link" to="/contact">contact me</router-link>, if
    you have any questions!
  </p>
  <div class="projectsPage">
    <ProjectCard
      v-for="project in projects"
      :key="project.title"
      :title="project.title"
      :description="project.description"
      :image="project.image"
      :link="project.link"
    />
  </div>
</template>

<script>
import ProjectCard from "../components/ProjectCard.vue";
export default {
  name: "ProjectsPage",
  title() {
    return "Projects | Preston Roesslet";
  },
  data() {
    return {
      projects: [
        {
          title: "Preston Roesslet",
          description: "This website!",
          image: "logo.png",
          link: "https://github.com/proesslet/Portfolio",
        },
        {
          title: "Oklahoma Weather Lab",
          description:
            "The website for the Oklahoma Weather Lab was built using PHP and Bootstrap along with some custom CSS. It utilizes a MySQL database to store data. Some features include user management, shift attendance tracking, and a text forecast submission system. As of May, 2021, the I am currently refactoring the website using Vue3 and Node.JS to enhance some of the current features, and make way for new features such as a polygon based forecast system, a point forecast system, and a forecast competition! This version is not live yet, though it will be coming very soon!",
          image: "owl_logo.png",
          link: "https://owl.ou.edu",
        },
        {
          title:
            "Cooperative Institute for Severe and High-Impact Weather Research and Operations",
          description:
            "The website for CIWRO was built using PHP and Javascript along with custom CSS. It utilizes a MariaDB database to store data. The public facing website features a news article system, live job postings, as well as a directory of all employees. For the internal website, I built an employee management system, which includes profile editing and deletion, permission levels, and an admin page. The internal website also has a well organized layout for accessing internal documents.",
          image: "ciwro_logo.jpeg",
          link: "https://ciwro.ou.edu/",
        },
      ],
    };
  },
  components: {
    ProjectCard,
  },
  methods: {},
  mounted() {},
};
</script>

<style scoped>
.projectsPage {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 1rem;
  padding: 1rem;
  width: 90%;
  margin: 1rem auto;
}
h1 {
  font-size: 2.75rem;
  font-weight: 700;
  margin: 0;
  padding: 0;
  line-height: 1;
  text-align: center;
}
p {
  text-align: center;
  font-size: 1.25rem;
}
#contact-link {
  color: var(--color-primary);
}

@media screen and (max-width: 500px) {
  .projectsPage {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }

  h1 {
    font-size: 1.2rem;
    padding-bottom: 0.5rem;
    margin: 1rem auto;
  }
  p {
    font-size: 0.75rem;
  }
}
</style>
