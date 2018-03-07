<template>
<div class="top-container">
  <div class="header">
    <div class="header-container">
      <div class="header-title">
        <h1>Nate Schier - {{ title }}</h1>
      </div>
      <div class="header-search">
        <form action="https://www.google.com/search" method="get" target="_blank">
          <input name="sitesearch" type="hidden" value="nateschier.com">
          <input name="q" type="text">
          <button class="search-button"><i class="fas fa-search"></i></button>
        </form>
      </div>
      <div class="header-logo">
        <router-link to="/">
          <span class="header-logo-image"></span>
        </router-link>
      </div>
    </div>
  </div>
  <div class="menu-bar">
    <div class="menu-container">
      <div class="menu-mail">
        <span class="menu-menu-text">Menu</span> <i class="fas fa-caret-down small-caret"></i>
             <i class="fas fa-caret-right small-caret"></i>
      </div>
      <div class="menu-middle">
        <div class="menu-icon social-wide-screen-icon">
          <a href="https://www.linkedin.com/in/nateschier/" target="_blank">
            <i class="fab fa-linkedin-in"></i>
          </a>
        </div>
        <div class="menu-icon social-wide-screen-icon">
          <a href="https://twitter.com/ntschier" target="_blank">
            <i class="fab fa-twitter"></i>
          </a>
        </div>
        <div class="menu-icon social-wide-screen-icon">
          <a href="https://www.instagram.com/ntschier/" target="_blank">
            <i class="fab fa-instagram"></i>
          </a>
        </div>
        <div class="menu-icon social-med-screen-icon">
          <router-link to="/">
            <i class="fas fa-home"></i>
          </router-link>
        </div>
        <div class="menu-icon social-med-screen-icon">
          <router-link to="/about">
            <i class="fas fa-user"></i>
          </router-link>
        </div>
<!--         <div class="menu-icon social-med-screen-icon">
          <router-link to="/blog">
            <i class="fas fa-lightbulb"></i>
          </router-link>
        </div> -->
        <div class="menu-icon social-med-screen-icon">
          <router-link to="/daphne">
            <i class="fas fa-paw"></i>
          </router-link>
        </div>
        <div class="menu-icon social-med-screen-icon">
          <router-link to="/resume">
            <i class="fas fa-file-alt"></i>
          </router-link>
        </div>
        <div class="menu-icon social-med-screen-icon">
          <router-link to="/contact">
            <i class="fas fa-envelope-square"></i>
          </router-link>
        </div>

      </div>
      <div class="menu-right">
        <div class="menu-icon social-wide-screen-icon">
          <a href="https://github.com/cosst" target="_blank">
            <i class="fab fa-github-alt"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'partial-header',
  props: ['title']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
  background-color: #f1f1f1;
  height: 60px;
  width: 100%;
}
@media only screen and (max-width: 800px)  {
  .fa-caret-down {
    display: none;
  }
  .header {
    display: none;
  }
  .main-content {
    margin-left: 8px;
  }
  .menu-icon {
    display: inline-block;
  }
  .menu-mail {
    margin-left: -30px;
    width: 66px;
  }
  .menu-right {
    display: none
  }
  .social-wide-screen-icon {
    display: none;
  }
}
@media only screen and (max-width: 499px) {
  .menu-icon {
    width: 24px;
  }
}
@media only screen and (min-width: 500px) {
  .menu-icon {
    width: 34px;
  }
}
@media only screen and (min-width: 600px) {
  .menu-icon {
    width: 44px;
  }
}
@media only screen and (min-width: 801px) {
  .fa-caret-right {
    display: none;
  }
  .menu-icon {
    width: 54px
  }
  .menu-mail {
    width: 166px;
  }
  .social-med-screen-icon {
    display: none;
  }
  .social-wide-screen-icon {
    display: inline-block;
  }
  .top-container {
    position: fixed;
  }
}
.header-container {
  display: flex;
  justify-content: space-between;
  padding: 15px 0px 10px;
}
.header-logo {
  flex-grow: 0;
  height: 30px;
  text-align: right;
}
.header-logo-image {
  background-image: url("../../assets/oswald.png");
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
.header-title {
  flex-grow: 0;
  line-height: 30px;
  margin-left: 44px;
  text-align: left;
  width: 140.5px;
}
.header-title h1 {
  font-size: 14px;
  font-style: italic;
  font-weight: normal;
}
.header-search {
  flex-grow: 3;
  line-height: 30px;
  text-align: left;
}
.header-search input {
  border: 1px solid rgba(0,0,0,0.15);
  display: inline-block;
  font-family: arial,sans-serif;
  font-size: 16px;
  height: 28px;
  margin-left: 25px;
  margin-right: -5px;
  margin-top: 1px;
  padding: 0px 10px;
  max-width: 590px;
  width: 80%;
}
.header-search input:focus {
  border: 1px solid #4285f4;
  outline: none;
}
.menu-bar {
  background-color: white;
  border-top: 1px solid #e5e5e5;
  border-bottom: 1px solid #e5e5e5;
  height: 40px;
  padding: 5px 43px;
  width: 100%;
}
.menu-container {
  align-items: center;
  display: flex;
  height: 40px;
  justify-content: space-between;
}
.menu-icon {
  background-color: transparent;
  background-image: linear-gradient(to bottom,#f5f5f5,#f1f1f1);
  border: 1px solid rgba(0,0,0,0.1);
  border-radius: 2px;
  color: #444;
  font-weight: 700;
  height: 27px;
  line-height: 27px;
  margin-right: 10px;
  padding: 0px 8px;
  text-align: center;
}
.menu-icon:hover {
  border: 1px solid #c6c6c6;
}
.menu-icon a {
  color: #444; 
}
.menu-icon a:hover {
  color: #333;
}
.menu-mail {
  color: #dd4b39;
  font-size: 14pt;
  line-height: 29px;
  text-align: left;
  text-shadow: none;
}
.menu-middle {
  flex-grow: 1;
  text-align: left;
}
.menu-right {
  flex-grow: 2;
  margin-right: 65px;
  text-align: right;
}
.search-button {
  background: -webkit-linear-gradient(top,#4387fd,#4683ea);
  border: 1px solid transparent;
  border-top-right-radius: 2px;
  border-top-left-radius: 0px;
  border-bottom-right-radius: 2px;
  border-bottom-left-radius: 0px;
  color: white;
  display: inline-block;
  font-size: 14px;
  height: 30px;
  width: 60px;
}
.search-button:active {
  background: -webkit-linear-gradient(top,#3c7ae4,#3f76d3);
  box-shadow: inset 0 2px 0 rgba(0,0,0,.15);
}
.search-button:focus {
  box-shadow: inset 0 0 0 1px rgba(255,255,255,0.5);
  outline-width: 0px;
}
.small-caret {
  font-size: 0.65em;
}
.top-container {
  overflow: hidden;
  width: 100%;
}
@media only screen and (max-width: 330px) {
  .menu-mail {
    margin-right: -50px;
  }
  .menu-menu-text {
    display: none;
  }
}
@media only screen and (max-width: 350px) {
  .menu-icon {
    width: 18px;
  }
}
@media only screen and (max-width: 800px)  {
  .menu-bar {
    border-top: none;
    position: fixed;
  }
}
</style>