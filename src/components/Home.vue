<template>
  <div class="container">
    <div class="header">
      <div class="header-container">
        <div class="header-title">
          <h1>Nate Schier - Home</h1>
        </div>
        <div class="header-search">
          <input type="text" name="q">
        </div>
        <div class="header-logo">
          <span class="header-logo-image"></span>
        </div>
      </div>
    </div>
    <div class="menu-bar">
      <div class="menu-container">
      </div>
    </div>
    <div class="main">
      <div class="sidebar-container">
        <div class="sidebar">
          <div class="folder-container">
            <div class="compose">
              <div class="compose-button">
                Compose
              </div>
            </div>
            <div class="folders">
              <ul>
                <li><b>Inbox (9)</b></li>
                <li>Starred</li>
                <li>Sent Mail</li>
                <li><b>Drafts (3)</b></li>
              </ul>
              <div class="categories">
                <i class="fas fa-caret-right"></i>&nbsp;&nbsp;Categories
              </div>
              <ul>
                <li>Folder</li>
                <li>Folder</li>
                <li>Folder</li>
                <li>Folder</li>
                <li>Folder</li>
                <li>Folder</li>
                <li>Folder</li>
                <li>Folder</li>
                <li>Folder</li>
                <li>Folder</li>
                <li>Folder</li>
                <li>Folder</li>
                <li>Folder</li>
                <li>Folder</li>
                <li>Folder</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="chat-box">
          sadf
        </div>
      </div>
      <div class="main-container">
      </div>
    </div>
  </div>
</template>

<script>
import SectionHeader from './SectionHeader'
import CompanyLocationHeader from './CompanyLocationHeader'
import PositionDatesHeader from './PositionDatesHeader'
import PositionBullets from './PositionBullets'
import SkillsAndInterests from './SkillsAndInterests'
import EducationBullets from './EducationBullets'
import AwardsBullets from './AwardsBullets'
import PositionBulletsUl from './PositionBulletsUl'

export default {
  name: 'page',
  components: { SectionHeader, CompanyLocationHeader, PositionDatesHeader, PositionBullets, EducationBullets, SkillsAndInterests, AwardsBullets, PositionBulletsUl
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
.header {
  background-color: #f1f1f1;
  height: 60px;
  width: 100%;
}
.menu-bar {
  background-color: white;
  border: 1px solid #e5e5e5;
  height: 40px;
  width: 100%;
}
.main {
  width: 100%;
}
.sidebar-container {
  display: flex;
  flex-direction: column;
  width: 202px;
}
.folder-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: none;
}
.sidebar {
  height: 500px;
}
.chat-box {
  background-color: blue;
  height: 200px;
}
.main-container {
  width: 100%;
}
.compose-button {
  background-color: #d14836;
  background-image: linear-gradient(to bottom,#dd4b39,#d14836);
  border-color: transparent;
  border-radius: 2px;
  border-style: solid;
  border-width: 1px;
  color: white;
  -webkit-font-smoothing: auto;
  font-size: 11px;
  font-weight: bold;
  height: 27px;
  line-height: 27px;
  margin: 10px auto;
  padding: 0 8px 0 8px;
  text-transform: uppercase;
  white-space: nowrap;
  width: 97px;
}
.compose {
  text-align: center;
  width: 202px;
}
.folders li {
  height: 16px;
  padding: 1px 0px;
}
.folders ul {
  font-size: 12.8px;
  list-style-type: none;
  margin: 0 0 0 33px;
  text-align: left;
}
.categories {
  font-size: 12.8px;
  font-weight: bold;
  margin: 10px 0 10px 30px;
  text-align: left;
  width: 100%;
}
.header-container {
  display: flex;
  justify-content: space-between;
  padding: 15px 0px 10px;
}
.header-title {
  flex-grow: 0;
  line-height: 30px;
  margin-left: 44px;
  text-align: left;
}
.header-search {
  flex-grow: 3;
  line-height: 30px;
  text-align: left;
}
.header-search input {
  display: inline-block;
  height: 20px;
  margin-left: 25px;
  width: 80%;
}
.header-logo {
  flex-grow: 0;
  height: 30px;
  text-align: right;
}
.header-logo-image {
  background-image: url("../assets/oswald.png");
  background-size: 32px 32px;
  border-radius: 50%;
  display: inline-block;
  font-size: 13px;
  font-stretch: 100%;
  height: 32px;
  line-height: normal;
  margin-right: 30px;
  white-space: nowrap;
  width: 32px;
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
.summary-text {
  margin-bottom: 10px;
  text-align: left;
}
h1 {
  font-size: 16px;
  font-weight: normal;
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
</style>