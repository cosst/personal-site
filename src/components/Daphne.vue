<template>
  <div class="container">
    <partial-header title="Daphne"></partial-header>
    <div class="main">
      <div class="sidebar-toggle">
        <sidebar></sidebar>
      </div>
      <div class="main-container">
        <div class="main-area">
          <email-title
            subject="This is my dog Daphne"
            title="Daphne"
          ></email-title>
          <div class="main-content">
            <email-header></email-header>
            <p>Hi friend,</p>
            <p>
              So while I'm sure you want to learn about me and all, I know the
              real reason you're here is to see Daphne (AKA Daph, Doodle, Bubba,
              Mama, etc.).
            </p>
            <p>
              Daphne is a six year old
              <span id="show-modal" @click="showModal = true"
                >Dogue de Bordeaux (French Mastiff)</span
              >
              and lab mix. We got her from
              <a href="http://www.muchlove.org/" target="_blank"
                >Much Love Animal Rescue</a
              >
              in August of 2016 when she was ~6.5 months old. Apparently she had
              been hit by a car when just a few months old and had turned up
              injured at the North Central Animal Shelter in LA, where a very
              wonderful volunteer took a liking to her and got her connected
              with Much Love. Much Love got her the hip and pelvic surgery she
              needed, and after a brief stint with some also very wonderful
              foster parents, she came to live with us in her forever home.
            </p>
            <modal
              v-if="showModal"
              @close="showModal = false"
              img="https://media1.giphy.com/media/PWuPMJggRWDCM/200.gif"
            >
            </modal>
            <p>Without further ado, some pictures of our sweet lady!</p>
            <p class="daphne-image-heading">
              <br />
              <i>Baby Daphne (before we got her)</i>
            </p>
            <p>
              <img
                class="daphne-image"
                :src="require('../assets/puppy_daph_01.png').default"
              />
              <img
                class="daphne-image"
                :src="require('../assets/puppy_daph_02.jpg').default"
              />
            </p>
            <p class="daphne-image-heading">
              <br />
              <i>Lounging Daphne</i>
            </p>
            <p>
              <img
                class="daphne-image"
                :src="require('../assets/lounging_daph_01.jpg').default"
              />
              <img
                class="daphne-image"
                :src="require('../assets/lounging_daph_02.jpg').default"
              />
            </p>
            <p class="daphne-image-heading">
              <br />
              <i>Playing Daphne</i>
            </p>
            <p>
              <img
                class="daphne-image"
                :src="require('../assets/playing_daph_01.png').default"
              />
              <img
                class="daphne-image"
                :src="require('../assets/bone_daph_01.jpg').default"
              />
              <img
                class="daphne-image"
                :src="require('../assets/playing_daph_02.jpg').default"
              />
            </p>
            <p class="daphne-image-heading">
              <br />
              <i>Bathing Daphne</i>
            </p>
            <p>
              <img
                class="daphne-image"
                :src="require('../assets/bath_daph_01.jpg').default"
              />
            </p>
            <p class="daphne-image-heading">
              <br />
              <i>Sleeping Daphne</i>
            </p>
            <p>
              <img
                class="daphne-image"
                :src="require('../assets/sleeping_daph_03.jpg').default"
              />
              <img
                class="daphne-image"
                :src="require('../assets/sleeping_daph_02.jpg').default"
              />
              <img
                class="daphne-image"
                :src="require('../assets/sleeping_daph_01.jpg').default"
              />
            </p>
            <p class="daphne-image-heading">
              <br />
              Posing Daphne
            </p>
            <p>
              <img
                class="daphne-image"
                :src="require('../assets/cute_daph_01.png').default"
              />
              <img
                class="daphne-image"
                :src="require('../assets/cute_daph_03.jpg').default"
              />
              <img
                class="daphne-image"
                :src="require('../assets/bowtie_daph_01.jpg').default"
              />
              <img
                class="daphne-image"
                :src="require('../assets/cute_daph_02.jpg').default"
              />
            </p>
            <p>
              If you've got Daph fever and the only prescription is more Daph,
              please
              <router-link to="contact">send me a message</router-link> and I'd
              be happy to oblige.
            </p>
            <p>Cheers,</p>
            <p>Nate</p>
          </div>
        </div>
      </div>
    </div>
    <partial-footer></partial-footer>
  </div>
</template>

<script>
import PartialHeader from "./partials/PartialHeader";
import Sidebar from "./partials/Sidebar";
import PartialFooter from "./partials/PartialFooter";
import EmailTitle from "./partials/EmailTitle";
import EmailHeader from "./partials/EmailHeader";

export default {
  name: "daphne",
  components: {
    PartialHeader,
    Sidebar,
    PartialFooter,
    EmailTitle,
    EmailHeader,
  },
  data: function () {
    return {
      showModal: false,
    };
  },
  metaInfo: {
    title: "Daphne", // set a title
    meta: [
      {
        name: "description",
        content:
          "All about Daphne, my two year old French Mastiff and lab mix.",
      },
      { property: "og:title", content: "Daphne - Nate Schier" },
      {
        property: "og:description",
        content:
          "All about Daphne, my two year old French Mastiff and lab mix.",
      },
      {
        property: "og:image",
        content: "http://www.nateschier.com/static/puppy_daph.png",
      },
      { property: "og:url", content: "http://www.nateschier.com/daphne" },
    ],
    htmlAttrs: {
      lang: "en",
      amp: undefined, // "amp" has no value
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  background-color: white;
  display: flex;
  flex-wrap: wrap;
  font-family: arial, sans-serif;
  justify-content: center;
  margin: 0;
}
.daphne-image {
  display: block;
  margin-bottom: 0.5rem;
  max-width: 600px;
  width: 100%;
}
.daphne-image-heading {
  font-style: italic;
}
.main {
  display: flex;
  width: 100%;
}
.main-area {
  text-align: left;
}
.main-container {
  width: 100%;
}
.main-content {
  border-top: 1px solid #e5e5e5;
  border-bottom: 1px solid #e5e5e5;
  font-size: 12.8px;
  margin: 0px 30px 0px 10px;
}
.main-content a {
  color: #0000ee;
}
@media only screen and (max-width: 800px) {
  .sidebar-toggle {
    display: none;
  }
}
@media only screen and (min-width: 801px) {
  .main {
    margin-top: 112px;
  }
  .main-container {
    margin-left: 212px;
  }
}
</style>