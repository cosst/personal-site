<template>
  <div class="sidebar-container">
    <div class="sidebar">
      <div class="folder-container">
        <div class="compose">
          <div class="compose-button">
            <a href="/#/contact">CONTACT ME</a>
          </div>
        </div>
        <div class="folders">
          <div class="nav-fake">
            <ul>
              <li>Inbox</li>
              <li>Starred</li>
              <li>Sent Mail</li>
              <li>Drafts</li>
            </ul>
          </div>
          <div class='nav-menu'>
            <div class="categories">
              <i class="fas fa-caret-down"></i>&nbsp;&nbsp;Navigate
            </div>
              <ul>
                <router-link to="/" exact tag="li">Home</router-link>
                <router-link to="resume" tag="li">Resume</router-link>
                <router-link to="work" tag="li">Work</router-link>
                <router-link to="blog" tag="li">Blog</router-link>
                <router-link to="daphne" tag="li">Daphne</router-link>
                <router-link to="contact" tag="li">Contact</router-link>
              </ul>
          </div>
          <div class="nav-fake">
            <ul>
              <li>Apartments</li>
              <li>Events</li>
              <li>Family & Friends</li>
              <li>Flights & Travel</li>
              <li>Medical</li>
              <li>Newsletters</li>
              <li>Pomona</li>
              <li>Professional</li>
              <li>Recipes</li>
              <li>Sidebench</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="chat-box">
      <div class="chat-container">
        <div class="chat-divider">
        </div>
        <div class="chat-friend">
          <div class="chat-icon">
            <span class="chat-icon-image chat-icon-image-bill"></span>
          </div>
          <div class="chat-text">
            Bill Murray<br><span class="chat-text-small">bring the manatee plz</span>
          </div>
        </div>
        <div class="chat-friend">
          <div class="chat-icon">
            <span class="chat-icon-image chat-icon-image-daphne"></span>
          </div>
          <div class="chat-text">
            Daphne<br><span class="chat-text-small">dinner?</span>
          </div>
        </div>
        <div class="chat-friend">
          <div class="chat-icon">
            <span class="chat-icon-image chat-icon-image-god"></span>
          </div>
          <div class="chat-text">
            God<br><span class="chat-text-small"><i class="fas fa-video chat-light-video"></i> You were in a video</span>
          </div>
        </div>
        <div class="chat-friend">
          <div class="chat-icon">
            <span class="chat-icon-image chat-icon-image-dory"></span>
          </div>
          <div class="chat-text">
            Dory<br><span class="chat-text-small">JUST KEEP SWIMMING</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'partial-sidebar',
  props: ['title'],
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
.categories {
  font-size: 12.8px;
  font-weight: bold;
  margin: 10px 0 10px 28px;
  text-align: left;
  width: 100%;
}
.chat-box {
  height: 200px;
}
.chat-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: none;
}
.chat-divider {
  box-shadow: 0 -2px 2px -1px rgba(0,0,0,.1);
  content: "";
  height: 4px;
  margin-left: 30px;
  width: 156px;
}
.chat-friend {
  color: #666;
  font-size: 13px;
  height: 32px;
  padding: 4px 0px 4px 15px;
  width: 202px;
}
.chat-icon {
  display: inline-block;
  margin-top: 1px;
  margin-right: -4px;
  vertical-align: middle;
  width: 40px;
}
.chat-icon-image {
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
.chat-icon-image-bill {
  background-image: url("../assets/bill.png")
}

.chat-icon-image-daphne {
  background-image: url("../assets/daphne.jpg")
}

.chat-icon-image-god {
  background-image: url("../assets/god.jpeg")
}

.chat-icon-image-dory {
  background-image: url("../assets/dory.jpg")
}
.chat-light-video {
  color: #aaaaaa;
}
.chat-text {
  display: inline-block;
  text-align: left;
  vertical-align: middle;
  width: 130px;
}
.chat-text-small {
  font-size: 11px;
}
.compose {
  text-align: center;
  width: 202px;
}
.compose a {
  color: white;
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
.folder-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: none;
}
.folders {
  margin-top: -10px;
}

.folders li {
  height: 16px;
  margin: 0px -10px 0px;
  padding: 1px 20px;
}

.folders ul {
  font-size: 12.8px;
  list-style-type: none;
  margin: 0 0 0 33px;
  text-align: left;
}
.nav-fake {
  color: #666A6B;
  font-weight: normal;
  margin-top: 10px;
}
.nav-menu {
  font-weight: bold;
}
.nav-menu a {
  color: black;
  text-decoration: none;
}
.nav-menu a:active {
  color: #dd4b39;
}
.nav-menu li:hover {
  background-color: #f1f1f1;
}
.nav-menu li:active {
  color: #dd4b39;
}
.router-link-exact-active {
  border-left: 4px solid #dd4b39;
  color: #dd4b39;
  margin-left: -30px !important;
  padding-left: 35px !important;
}
.sidebar {
  height: 465px;
}
.sidebar-container {
  display: flex;
  flex-direction: column;
  position: fixed;
  width: 202px;
}
</style>