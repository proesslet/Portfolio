<template>
  <div id="about">
    <h1>Contact Me!</h1>
    <section id="content">
      <p>
        If you have any questions or comments, or are interested in working with
        me on a project, please feel free to reach out to me!
      </p>
      <!-- contact form -->
      <form action="https://formspree.io/f/xwkjwvlp" method="POST">
        <label>
          Your email:
          <input type="email" name="email" />
        </label>
        <label>
          Your name:
          <input type="text" name="name" />
        </label>
        <label>
          Subject:
          <input type="text" name="subject" />
        </label>
        <label>
          Your message:
          <textarea name="message"></textarea>
        </label>
        <!-- your other form fields go here -->
        <button type="submit">Send</button>
      </form>
    </section>
  </div>
</template>

<script>
export default {
  title() {
    return "Contact | Preston Roesslet";
  },
  name: "ContactPage",
  data() {
    return {};
  },
  methods: {},
  mounted() {},
};
</script>

<style scoped>
#about {
  display: flex;
  flex-direction: column;
  align-items: center;
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

#content p {
  font-size: 1rem;
  margin: 0;
  padding: 0;
  text-align: center;
}

h1 {
  font-size: 4rem;
  font-weight: 700;
  margin: 0;
  padding: 0;
  line-height: 1;
}

form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 2rem;
  padding: 1rem;
  margin: 1rem auto;
  width: 100%;
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
}

label {
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: flex-start;
  width: 100%;
}
input {
  width: 100%;
  padding: 0.5rem;
  border-radius: 0.5rem;
  border: none;
  margin: 0 0 0.5rem 0;
}
textarea {
  width: 100%;
  padding: 5rem;
  border-radius: 0.5rem;
  border: none;
  margin: 0 0 0.5rem 0;
}
button {
  width: 50%;
  padding: 0.5rem;
  border-radius: 0.5rem;
  border: none;
  margin: 0.5rem 0;
}

@media (max-width: 500px) {
  #content {
    max-width: 100vw;
  }

  form {
    width: 100%;
  }

  button {
    width: 100%;
  }

  input {
    width: 100%;
  }

  textarea {
    width: 100%;
  }

  label {
    width: 100%;
  }

  h1 {
    font-size: 2rem;
  }

  #content p {
    font-size: 0.75rem;
  }
}
</style>
