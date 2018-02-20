<template>
  <div class="container">
    <partial-header title="Home"></partial-header>
    <div class="main">
      <div class="sidebar-toggle">
        <partial-sidebar></partial-sidebar>
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
              I am a software developer and consultant based in Los Angeles. Please have a look around to get to know me a bit better, and if you'd like to get in touch regarding either a potential engagement or cute puppy pics/videos, <a href="/#/contact">please shoot me a message</a>.
            </p>
            <div class="home-site-menu">
              Site Menu:
              <ul>
                <a href="/#/resume" v-on:click="setActive('resume')" :class="{ active: isActive('resume') }"><li>Resume</li></a>
                <a href="/#/work"><li>Work</li></a>
                <a href="/#/blog"><li>Blog</li></a>
                <a href="/#/daphne"><li>Daphne</li></a>
                <a href="/#/contact"><li>Contact</li></a>
              </ul>
            </div>
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
import PartialHeader from './PartialHeader'
import PartialSidebar from './PartialSidebar'
import PartialFooter from './PartialFooter'
import EmailTitle from './EmailTitle'
import EmailHeader from './EmailHeader'

export default {
  name: 'home',
  components: { PartialHeader, PartialSidebar, PartialFooter, EmailTitle, EmailHeader
  },
  data: function () {
    return { activeItem: 'home' }
  },
  methods: {
    isActive: function (menuItem) {
      return this.activeItem === menuItem
    },
    setActive: function (menuItem) {
      this.activeItem = menuItem
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
.home-site-menu {
  margin-left: 32px;
}
.home-site-menu ul {
  margin: 5px 15px 5px 0px;
}
.home-site-menu li {
  margin-left: 30px;
  padding: 5px 5px;
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

p {
  margin: 15px 32.5px;
  width: 80%;
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
</style>