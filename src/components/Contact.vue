<template>
  <div class="container">
    <partial-header title="Contact"></partial-header>
    <div class="main">
      <div class="sidebar-toggle">
        <sidebar></sidebar>
      </div>
      <div class="main-container">
        <div class="main-area">
          <email-title subject="What can I help you with?" title="Contact"></email-title>
          <div class="main-content">
            <email-header></email-header>
            <greeting></greeting>
            <p>
              Please send me a message below and I will get back to you shortly.
            </p>
            <sign-off></sign-off>
            <p>
              Nate
            </p>
          </div>
          <div class="contact-form-container">
            <div class="contact-form-body">
              <form id="contact-form" @submit="checkForm" action="https://formspree.io/f/xoqrdynk" method="POST">

                <label for="name">Name</label>
                <input type="text" id="name" name="name" v-model="name" placeholder="Jenny Tutone" />

                <input type="hidden" name="_subject" value="New message from nateschier.com" />

                <label for="email">Email</label>
                <input type="email" id="email" name="_replyto" v-model="email" placeholder="jenny867@gmail.com" />

                <label for="message">Message</label>
                <textarea id="message" name="message" v-model="message" placeholder="Can you please stop giving people my number?" style="height:200px"></textarea>

                <input type="hidden" name="_next" value="http://www.nateschier.com/contact-success" />

                <p class="submit-error" v-if="errors.length">
                  <b>Message not submitted. Please correct the following error(s) and try again.</b>
                  <ul class="submit-error-list">
                    <li v-for="error in errors">{{ error }}</li>
                  </ul>
                </p>

                <input type="submit" value="Submit">

              </form>
            </div>
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
import Greeting from "./partials/Greeting";
import SignOff from "./partials/SignOff";

export default {
  name: "contact",
  components: {
    PartialHeader,
    Sidebar,
    PartialFooter,
    EmailTitle,
    EmailHeader,
    Greeting,
    SignOff,
  },
  data: function () {
    return {
      errors: [],
      name: null,
      email: null,
      message: null,
    };
  },
  metaInfo: {
    title: "Contact", // set a title
    meta: [
      {
        name: "description",
        content:
          "Please send me a message if you would like to discuss consulting, contracting, apprenticeship, or full-time opportunities. Or if you just want to say hi.",
      },
      { property: "og:title", content: "Contact - Nate Schier" },
      {
        property: "og:description",
        content:
          "Please send me a message if you would like to discuss consulting, contracting, apprenticeship, or full-time opportunities. Or if you just want to say hi.",
      },
      {
        property: "og:image",
        content: "http://www.nateschier.com/static/oswald.png",
      },
      { property: "og:url", content: "http://www.nateschier.com/contact" },
    ],
    htmlAttrs: {
      lang: "en",
      amp: undefined, // "amp" has no value
    },
  },
  methods: {
    checkForm: function (e) {
      if (this.name && this.email && this.message) return true;
      this.errors = [];
      if (!this.name) this.errors.push("Name is required.");
      if (!this.email) this.errors.push("Email is required.");
      if (!this.message) this.errors.push("Message is required.");
      e.preventDefault();
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
input[type="text"],
input[type="email"],
textarea {
  border: 1px solid rgba(0, 0, 0, 0.15);
  font-size: 12.8px;
  margin: 8px 0px;
  padding: 10px;
  width: 100%;
}
input[type="submit"] {
  background: -webkit-linear-gradient(top, #4387fd, #4683ea);
  border: 1px solid transparent;
  border-radius: 2px;
  color: white;
  cursor: pointer;
  font-size: 11px;
  font-weight: 700;
  height: 30px;
  padding: 5px;
  text-transform: uppercase;
}
label {
  font-size: 14px;
}
.contact-form-body {
  margin: 0 auto;
  width: 80%;
}
.contact-form-container {
  display: flex;
  justify-content: center;
  margin: 10px 0px 30px 0px;
  width: 100%;
}
.container {
  background-color: white;
  display: flex;
  flex-wrap: wrap;
  font-family: arial, sans-serif;
  justify-content: center;
  margin: 0;
}
.heading-text {
  font-size: 14px;
}
.heading-text-fa {
  color: black;
  font-size: 14px;
  margin-top: 2px;
}
.heading-text-fa a {
  color: grey;
  padding: 2px;
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
.submit-error {
  color: red;
  margin: 20px 0px;
  width: 100%;
}
.submit-error-list {
  margin-left: 30px;
  margin-top: 10px;
}
@media only screen and (max-width: 800px) {
  input[type="text"],
  input[type="email"],
  textarea {
    width: 92%;
  }
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