import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/main.js";
import "./assets/main.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faGear, faBars } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faBars, faGear, faGithub, faLinkedin);

createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(router)
  .mount("#app");
