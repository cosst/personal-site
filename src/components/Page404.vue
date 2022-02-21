<template>
  <div class="container">
    <partial-header title="404"></partial-header>
    <div class="main">
      <div class="sidebar-toggle">
        <sidebar></sidebar>
      </div>
      <div class="main-container">
        <div class="main-area">
          <email-title
            subject="Oops, this page does not exist!"
            title="404"
          ></email-title>
          <div class="main-content">
            <email-header></email-header>
            <p>Hi friend,</p>
            <p>
              Uh oh, it looks like the page that you are trying to reach does
              not exist.
            </p>
            <p>Please double check the URL and try again.</p>
            <p>
              If you think you have found a bug or issue with the site, I would
              very much appreciate it if you'd
              <router-link to="contact">let me know</router-link> so that I can
              fix it. :)
            </p>
            <site-map></site-map>
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
import SiteMap from "./partials/SiteMap";

export default {
  name: "page-404",
  components: {
    PartialHeader,
    Sidebar,
    PartialFooter,
    EmailTitle,
    EmailHeader,
    SiteMap,
  },
  metaInfo: {
    title: "404", // set a title
    meta: [
      {
        name: "description",
        content: "The page you are trying to reach does not exist.",
      },
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