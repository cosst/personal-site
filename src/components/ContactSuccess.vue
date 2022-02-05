<template>
  <div class="container">
    <partial-header title="Contact"></partial-header>
    <div class="main">
      <div class="sidebar-toggle">
        <sidebar></sidebar>
      </div>
      <div class="main-container">
        <div class="main-area">
          <email-title
            subject="Thanks for your message!"
            title="Contact"
          ></email-title>
          <div class="main-content">
            <email-header></email-header>
            <p>Hi friend,</p>
            <p>
              Thank you for your message. I will get back to you via email
              shortly.
            </p>
            <p>
              In the meantime, please feel free to connect with me on
              <a href="https://www.linkedin.com/in/nateschier/" target="_blank"
                >LinkedIn</a
              >
              or follow me on
              <a href="https://twitter.com/ntschier" target="_blank">Twitter</a
              >,
              <a href="https://www.instagram.com/ntschier/" target="_blank"
                >Instagram</a
              >, or
              <a href="https://github.com/cosst" target="_blank">GitHub</a>.
            </p>
            <p>Thanks,</p>
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
  name: "contact-success",
  components: {
    PartialHeader,
    Sidebar,
    PartialFooter,
    EmailTitle,
    EmailHeader,
  },
  metaInfo: {
    title: "Message Sent", // set a title
    meta: [
      {
        name: "description",
        content:
          "Thank you for your message. I will get back to you via email shortly.",
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