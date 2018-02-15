<template>
<div class="top-container">
  <div class="header">
    <div class="header-container">
      <div class="header-title">
        <h1>Nate Schier - {{ title }}</h1>
      </div>
      <div class="header-search">
        <input type="text" name="q">
        <button class="search-button"><i class="fas fa-search"></i></button>
      </div>
      <div class="header-logo">
        <a href="/#/">
          <span class="header-logo-image"></span>
        </a>
      </div>
    </div>
  </div>
  <div class="menu-bar">
    <div class="menu-container">
      <div class="menu-mail">
        Menu <i class="fas fa-caret-down small-caret"></i>
      </div>
      <div class="menu-middle">
        <div class="menu-icon">
          <a href="https://www.linkedin.com/in/nateschier/" target="_blank">
            <i class="fab fa-linkedin-in"></i>
          </a>
        </div>
        <div class="menu-icon">
          <a href="https://twitter.com/ntschier" target="_blank">
            <i class="fab fa-twitter"></i>
          </a>
        </div>
        <div class="menu-icon">
          <a href="https://www.instagram.com/ntschier/" target="_blank">
            <i class="fab fa-instagram"></i>
          </a>
        </div>
      </div>
      <div class="menu-right">
        <div class="menu-icon">
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
  height: 28px;
  margin-left: 25px;
  margin-right: -5px;
  padding-top: 1px;
  max-width: 590px;
  width: 80%;
}
.menu-bar {
  background-color: white;
  border: 1px solid #e5e5e5;
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
  display: inline-block;
  height: 27px;
  line-height: 27px;
  margin-right: 10px;
  padding: 0px 8px;
  text-align: center;
  width: 54px;
}
.menu-icon a {
  color: #444; 
}
.menu-mail {
  color: #dd4b39;
  font-size: 14pt;
  line-height: 29px;
  text-align: left;
  text-shadow: none;
  width: 166px;
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
.small-caret {
  font-size: 0.65em;
}
.top-container {
  width: 100%;
}
</style>