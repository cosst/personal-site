<template>
  <div class="container">
    <partial-header title="About"></partial-header>
    <div class="main">
      <div class="sidebar-toggle">
        <partial-sidebar></partial-sidebar>
      </div>
      <div class="main-container">
        <div class="main-area">
          <email-title subject="Re: What would you say you do here?" title="About"></email-title>
          <div class="main-content">
            <email-header></email-header>
            <p>
              Hi friend,
            </p>
            <p>I am a full stack engineer and consultant with a primary focus on JavaScript. If you 
              would like to explore working with me, please <router-link to="contact">send me a message</router-link>.
            </p>
            <p>
              While I have been putting things online ever since I built my high school's baseball team's <a href="https://web.archive.org/web/20080930201121/http://hamdenhighbaseball.com:80/" target="_blank">website</a> (please excuse the dead image links) back in 2005, my path to working as a developer is a bit more recent.
            </p>
            <p>
              After graduating from Pomona College in sunny SoCal, living in Hawaii for a year, working at a high-end recruiting startup on the east coast, and co-founding and building <a href="http://sidebench.com/" target="_blank">Sidebench</a> (a digital product consultancy) for five years (<a href="https://www.inc.com/profile/sidebench" target="_blank">#329 on the Inc. 500 list for 2017</a>), I decided to leave Sidebench and fully return to the wonderful world of code in July of 2017. 
            </p>
            <p>
              Since then I have been working as a contractor while continually studying, learning, and most importantly building things to grow my own full-stack development skillset. Thus far I have focused primarily on JavaScript, and more specifically React & Node, though I am interested in expanding out from there as well. I am also working my way through Harvard's CS50 course, and I plan to continue with other online CS courses to build a solid computational foundation and explore new fields.
            </p>
            <p>
              Technologies that I am currently comfortable with include JavaScript, React, Vue, Node, Python, Express, MongoDB, RethinkDB, REST APIs, Mocha, Chai, webpack, Babel, Git, Yarn/npm, Heroku, and Firebase.
            </p>
            <p>
              While not everything I have done thus far can be shared publicly, a few projects of mine are listed below. You are welcome to view <a href="https://github.com/cosst" target="_blank">my full GitHub profile</a> as well.
            </p>
            <div class="portfolio-menu">
              <ul>
                <li><a href="https://github.com/cosst/eat-on-the-way" target="_blank">Eat On The Way</a>: React/Node tool that makes use of the Yelp Fusion and Google Maps Distance Matrix APIs</li>
                <li><a href="https://github.com/cosst/tldr-bot" target="_blank">TL;DR Twitter Bot</a>: fun little experiment I did to familiarize myself with the Twitter API</li>
                <li><a href="https://github.com/cosst/personal-site" target="_blank">This Site</a>: an exploration in Vue.js and honing my styling skills in an entertaining way</li>
              </ul>
            </div>
            <p>
              I am interested in contract, consulting, apprenticeship and potentially full-time opportunities. If you are interested in chatting, please <router-link to="contact">shoot me a message</router-link>.
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
  name: 'about',
  components: { PartialHeader, PartialSidebar, PartialFooter, EmailTitle, EmailHeader
  },
  data: function () {
    return {
      selfStudy: [
        {bullet: "Focus primarily on full-stack JavaScript and more specifically React & Node"},
        {bullet: "Learn through a mix of my own projects, tutorials, online reading, and contributing to open source"},
        {bullet: "Enrolled in Harvard’s CS50x to build foundational CS knowledge; estimated completion: February 2018"}
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
p {
  margin: 15px 32.5px;
  width: 80%;
}
.container {
  background-color: white;
  display: flex;
  flex-wrap: wrap;
  font-family: arial,sans-serif;
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
  color: #0000EE;
}
.portfolio-menu {
  margin-left: 32px;
  width: 75%;
}
.portfolio-menu ul {
  margin: 5px 15px 5px 0px;
}
.portfolio-menu li {
  margin-left: 30px;
  padding: 5px 5px;
}
@media only screen and (max-width: 800px)  {
  .sidebar-toggle {
    display: none;
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