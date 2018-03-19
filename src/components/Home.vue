<template>
  <div class="container">
    <partial-header title="Home"></partial-header>
    <div class="main">
      <div class="sidebar-toggle">
        <sidebar></sidebar>
      </div>
      <div class="main-container">
        <div class="main-area">
          <email-title subject="Welcome to my site!" title="Home"></email-title>
          <div class="main-content">
            <email-header></email-header>
            <p>
              Hi friend,
            </p>
            <p>
              Welcome to my website!
            </p>
            <p>
              I am a full stack engineer and consultant based in Los Angeles. Please have a look around to get to know me a bit better, and if you want you can <router-link to="contact">send me a message</router-link>.
            </p>
            <site-map></site-map>
            </p>
            <p>
              Cheers,
            </p>
            <p>
              Nate
            </p>
          </div>
        </div>
      </div>
    </div>
    <partial-footer></partial-footer>
  </div>
</template>

<script>
import PartialHeader from './partials/PartialHeader'
import Sidebar from './partials/Sidebar'
import PartialFooter from './partials/PartialFooter'
import EmailTitle from './partials/EmailTitle'
import EmailHeader from './partials/EmailHeader'
import SiteMap from './partials/SiteMap'

export default {
  name: 'home',
  components: { PartialHeader, Sidebar, PartialFooter, EmailTitle, EmailHeader, SiteMap
  },
  metaInfo: {
    title: 'Nate Schier', // set a title
    titleTemplate: null,
    meta: [
      { name: 'description', content: 'I am a full stack engineer and consultant with a primary focus on JavaScript.'},
      { property: 'og:title', content: 'Nate Schier'},
      { property: 'og:description', content: 'I am a full stack engineer and consultant with a primary focus on JavaScript.'},
      { property: 'og:image', content: 'http://www.nateschier.com/static/oswald.png'},
      { property: 'og:url', content: 'http://www.nateschier.com/'}
    ],
    htmlAttrs: {
      lang: 'en',
      amp: undefined // "amp" has no value
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main {
  display: flex;
  width: 100%;
}
.main-container {
  width: 100%;
}
.main-area {
  text-align: left;
}
.main-content {
  border-top: 1px solid #e5e5e5;
  border-bottom: 1px solid #e5e5e5;
  font-size: 12.8px;
  margin: 0px 30px 0px 10px;
}
.main-content a {
  color: #0000EE;
}
.container {
  background-color: white;
  display: flex;
  flex-wrap: wrap;
  font-family: arial,sans-serif;
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
.page {
  background-color: white;
  border: 1px solid black;
  max-width: 900px;
  margin-top: 10px;
  margin-bottom: 10px;
}
.page-text {
  padding: 50px;
}
@media only screen and (max-width: 800px)  {
  .sidebar-toggle {
    display: none;
  }
}
.summary-text {
  margin-bottom: 10px;
  text-align: left;
}
h1 {
  font-size: 17.6px;
  font-stretch: 100%;
  font-weight: 400;
}
ul {
  padding: 0;
}
li {
  margin: 0 10px;
}
a {
  color: black;
  text-decoration: none;
}
@media only screen and (max-width: 900px)  {
  .page {
    border: none;
    margin-top: 0px;
    margin-bottom: 0px;
  }
  .page-text {
    padding: 20px;
  }
}
@media only screen and (max-width: 460px)  {
  h1 {
    font-size: 45px;
  }
}
@media only screen and (max-width: 400px)  {
  h1 {
    font-size: 40px;
  }
}
@media only screen and (min-width: 801px)  {
  .main {
    margin-top: 112px;
  }
  .main-container {
    margin-left: 212px;
  }
}
</style>