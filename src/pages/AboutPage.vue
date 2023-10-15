<template>
  <div id="about">
    <div id="main">
      <section id="content">
        <h1>About Me!</h1>
        <p>
          Hey there, I'm Preston! I'm a Computer Science student at the
          University of oklahoma. I started out my academic career as a
          meteorology major with a minor in computer science, but as I took more
          and more computer science classes, I realized that I enjoyed it much
          more than meteorology. I love the aspect of problem solving and
          building tangible things that can be used by others.
        </p>

        <p>
          I am currently a Full-Stack Web Developer at the Cooperative Institute
          for Severe and High-Impact Weather Research and Operations (CIWRO).
          During my time at CIWRO, I have developed a new internal website for
          employees which includes a user management feature where users can
          edit their public profile and administrators can manage all users. I
          have also worked on redesigning the public facing website and making
          it a little bit more streamlined and efficient for users. Through this
          job, I have gained better experience with PHP and Javascript, as well
          as some UI design skills.
        </p>

        <p>
          I am also heavily involved with the Development Branch of the Oklahoma
          Weather Lab (OWL). I have been the Deputy Director of Development, and
          I am currently the Director of Development. Through this role, I have
          led many projects including a major overhaul of OWL's website, as well
          as developing new features such as a text forecast submission system
          and shift attendance tracking. Thes projects relied heavily on PHP and
          a MySQL database. Through this role I have also been responsible for
          keeping a list of active OWL members. I have utilized the attendance
          tracking feature in order to manage this list and effectivley
          communicated with members whether they are active or not.
        </p>

        <p>
          My current interests are those within the realm of full-stack
          development including, but not limited to, front-end frameworks such
          as Vue.js and React, back-end development with Node.js and Java
          Springboot, and also user interaction. I love being able to work on
          projects that can be utilized by others and improve their daily lives.
          I am also very interested in machine learning and AI, though I have
          not had much experience with it yet. I am always open to new projects
          that will help me learn and grow as a developer, so feel free to reach
          out!
        </p>

        <p>
          Outside of programming, my passion for meteorology still exists. I
          storm chase every chance I get and I love just looking at weather -
          particularly severe weather events. I would love to someday combine my
          passion for weather with my love of programming and help develop tools
          that could be used to save lives during severe weather events. I'm
          also an amateur radio operator and I enjoy being outdoors whether it
          be camping, hiking, or just sitting on the back deck with a cold
          drink.
        </p>
      </section>

      <section id="sidebar">
        <img
          id="profile-pic"
          src="../assets/preston.jpeg"
          alt="Preston Roesslet"
        />

        <div>
          <h2>Connect with me!</h2>
          <ul>
            <li>
              <a href="https://github.com/proesslet" target="_blank">
                <font-awesome-icon :icon="['fab', 'github']" size="2xl" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/preston-roesslet/"
                target="_blank"
              >
                <font-awesome-icon :icon="['fab', 'linkedin']" size="2xl" />
              </a>
            </li>
          </ul>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  title() {
    return "About | Preston Roesslet";
  },
  name: "AboutPage",
  data() {
    return {};
  },
  methods: {},
  mounted() {},
};
</script>

<style scoped>
#main {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: var(--color-text);
}

#content {
  width: 70%;
}

#sidebar {
  width: 30%;
  text-align: center;
}

#about {
  margin: 0 10%;
}

#about p {
  margin: 0 0 1em 0;
}

#profile-pic {
  width: 90%;
  border-radius: 50%;
  margin: 0 auto;
}

#sidebar ul {
  list-style-type: none;
  padding: 0;
}

#sidebar li {
  display: inline-block;
  margin: 0 0.5em;
}

#sidebar li a {
  color: var(--color-primary);
}

@media screen and (max-width: 500px) {
  #main {
    flex-direction: column-reverse;
  }

  #content {
    width: 100%;
    text-align: center;
  }

  #sidebar {
    width: 100%;
    margin: 1rem auto;
    padding: 1rem;
  }
}
</style>
