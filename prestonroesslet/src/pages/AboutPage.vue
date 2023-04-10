<template>
  <div id="about">
    <h1>About Me!</h1>
    <div id="main">
      <section id="content">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sodales
          accumsan facilisis. Quisque vel consequat neque. Nulla ac malesuada
          turpis. Nulla ac mi sit amet quam consectetur elementum ut vitae diam.
          Quisque semper augue fermentum nunc blandit vestibulum. Etiam aliquam
          facilisis placerat. Pellentesque in purus id turpis commodo pharetra.
          Maecenas cursus ultricies viverra. Ut pharetra tortor mauris, id
          congue purus gravida quis. Nunc convallis non massa ut aliquam. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit. Mauris fringilla
          neque non odio sollicitudin consequat.
        </p>

        <p>
          Praesent sollicitudin cursus purus, et pellentesque nibh mattis non.
          Pellentesque habitant morbi tristique senectus et netus et malesuada
          fames ac turpis egestas. Pellentesque habitant morbi tristique
          senectus et netus et malesuada fames ac turpis egestas. Phasellus
          pulvinar, felis et rhoncus eleifend, diam massa pharetra massa, sit
          amet condimentum enim dolor varius nibh. Maecenas pharetra ultricies
          scelerisque. Donec quis ultricies ex. Aliquam non lacus eros. Fusce
          sapien ipsum, gravida a eleifend fermentum, tempus quis risus. Aliquam
          erat volutpat. Nulla massa nunc, fringilla suscipit metus id, dictum
          posuere ante. Sed vitae mattis sapien.
        </p>

        <p>
          Aliquam lacus felis, efficitur eget dapibus et, auctor id felis.
          Nullam elementum faucibus risus vitae sollicitudin. Duis malesuada
          nibh a mauris imperdiet placerat. Nunc sagittis ultricies est, non
          fringilla risus. Donec ullamcorper orci sit amet elit gravida
          hendrerit. In maximus, ante a fermentum fermentum, libero lorem congue
          dui, ut condimentum lorem quam a nibh. Sed sit amet consectetur orci.
          Ut venenatis urna orci, eget feugiat eros maximus vitae. Praesent
          finibus diam in dui ornare pellentesque. Nunc eget pretium orci. Donec
          in erat sed ligula elementum sodales. Ut hendrerit ipsum eget lorem
          ornare ultricies. Aliquam rhoncus lobortis erat vitae molestie.
        </p>

        <p>
          Suspendisse in ante lectus. Maecenas eget eros hendrerit, egestas arcu
          in, pellentesque nisi. Donec risus diam, ultricies tincidunt maximus
          consequat, semper vitae tortor. Proin vitae enim a velit bibendum
          pellentesque. Vivamus consectetur elit sit amet commodo laoreet.
          Vivamus et dignissim dolor. Pellentesque iaculis enim et nulla congue
          dignissim. Ut orci felis, vulputate sollicitudin nisl eget, semper
          varius urna. Vivamus sit amet fermentum velit. Donec congue sagittis
          tellus, quis pretium nunc tincidunt id. Fusce at turpis bibendum,
          aliquam eros ac, scelerisque lorem. Nullam ultricies in sapien a
          efficitur. Orci varius natoque penatibus et magnis dis parturient
          montes, nascetur ridiculus mus. Vestibulum eu massa erat.
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
  width: 100%;
  border-radius: 50%;
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
    flex-direction: column;
  }

  #content {
    width: 100%;
  }

  #sidebar {
    width: 100%;
  }
}
</style>
