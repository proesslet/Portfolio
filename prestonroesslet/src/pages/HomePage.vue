<template>
  <div id="home">
    <section id="content">
      <h1>Hi,</h1>
      <h1>I'm Preston,</h1>
      <h2>Full Stack Developer</h2>
      <p>
        I'm a student at the University of Oklahoma pursuing a B.S in Computer
        Science. I am passionate about building software that makes a positive
        impact on people's lives. I have experience working with a variety of
        technologies, including PHP, Java, and Python. I am currently learning
        Vue.JS and Node.JS.
      </p>
    </section>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  data() {
    return {};
  },
  methods: {},
  mounted() {},
};
</script>

<style scoped>
#home {
  background: hsla(5, 82%, 32%, 1);
  background: radial-gradient(
    circle,
    hsla(5, 82%, 32%, 1) 0%,
    hsla(0, 100%, 12%, 1) 100%
  );
  background: -moz-radial-gradient(
    circle,
    hsla(5, 82%, 32%, 1) 0%,
    hsla(0, 100%, 12%, 1) 100%
  );
  background: -webkit-radial-gradient(
    circle,
    hsla(5, 82%, 32%, 1) 0%,
    hsla(0, 100%, 12%, 1) 100%
  );
  filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#951A0F", endColorstr="#3E0000", GradientType=1 );
  height: 100vh;
}
#content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 75vh;
  max-width: 50vw;
  margin: 0 auto;
  text-align: left;
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

@media screen and (max-width: 500px) {
  #content {
    max-width: 80vw;
  }

  h1 {
    font-size: 3rem;
  }

  h2 {
    font-size: 2rem;
  }

  p {
    font-size: 0.8rem;
  }
}
</style>
