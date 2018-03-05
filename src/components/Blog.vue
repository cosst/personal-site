<template>
  <div class="container">
    <partial-header title="Home"></partial-header>
    <div class="main">
      <div class="sidebar-toggle">
        <partial-sidebar></partial-sidebar>
      </div>
      <div class="main-container">
        <div class="main-area">
          <email-title subject="Stuff I've written" title="Blog"></email-title>
          <div class="main-content">
            <div class="blog-link-line">
              <div class="blog-link-line-first">
                <div class="blog-link-line-icon">
                  <i class="far fa-square"></i>
                </div>
                <div class="blog-link-line-icon">
                  <i class="far fa-star"></i>
                </div>
                <div class="blog-link-line-author">
                  Harvard's CS50 - Class Review
                </div>
              </div>
              <div class="blog-link-line-second">
                <div class="blog-link-line-text">
                  Summary and review of my experience taking Harvard's CS50 course online.
                </div>
                <div class="blog-link-line-date">
                  Feb 16
                </div>
              </div>
            </div>
            <div class="blog-link-line">
              <div class="blog-link-line-first">
                <div class="blog-link-line-icon">
                  <i class="far fa-square"></i>
                </div>
                <div class="blog-link-line-icon">
                  <i class="far fa-star"></i>
                </div>
                <div class="blog-link-line-author">
                  Leaving My Own Startup
                </div>
              </div>
              <div class="blog-link-line-second">
                <div class="blog-link-line-text">
                  Why I left Sidebench, the company I co-founded, after 5 years. 
                </div>
                <div class="blog-link-line-date">
                  Feb 11
                </div>
              </div>
            </div>
            <div class="blog-link-line">
              <div class="blog-link-line-first">
                <div class="blog-link-line-icon">
                  <i class="far fa-square"></i>
                </div>
                <div class="blog-link-line-icon">
                  <i class="far fa-star"></i>
                </div>
                <div class="blog-link-line-author">
                  What Language Should I Learn?
                </div>
              </div>
              <div class="blog-link-line-second">
                <div class="blog-link-line-text">
                  A guide and some (hopefully) helpful tips for those getting into the dev world.
                </div>
                <div class="blog-link-line-date">
                  Feb 7
                </div>
              </div>
            </div>
            <div class="blog-link-line">
              <div class="blog-link-line-first">
                <div class="blog-link-line-icon">
                  <i class="far fa-square"></i>
                </div>
                <div class="blog-link-line-icon">
                  <i class="far fa-star"></i>
                </div>
                <div class="blog-link-line-author">
                  WTF Are Pointers?
                </div>
              </div>
              <div class="blog-link-line-second">
                <div class="blog-link-line-text">
                  My attempt at a simple explanation of a very important yet tricky CS topic.
                </div>
                <div class="blog-link-line-date">
                  Jan 29
                </div>
              </div>
            </div>
            <div class="blog-link-line">
              <div class="blog-link-line-first">
                <div class="blog-link-line-icon">
                  <i class="far fa-square"></i>
                </div>
                <div class="blog-link-line-icon">
                  <i class="far fa-star"></i>
                </div>
                <div class="blog-link-line-author">
                  Harvard's CS50 - Class Review
                </div>
              </div>
              <div class="blog-link-line-second">
                <div class="blog-link-line-text">
                  Summary and review of my experience taking Harvard's CS50 course online.
                </div>
                <div class="blog-link-line-date">
                  Feb 16
                </div>
              </div>
            </div>
            <div class="blog-link-line">
              <div class="blog-link-line-first">
                <div class="blog-link-line-icon">
                  <i class="far fa-square"></i>
                </div>
                <div class="blog-link-line-icon">
                  <i class="far fa-star"></i>
                </div>
                <div class="blog-link-line-author">
                  Harvard's CS50 - Class Review
                </div>
              </div>
              <div class="blog-link-line-second">
                <div class="blog-link-line-text">
                  Summary and review of my experience taking Harvard's CS50 course online.
                </div>
                <div class="blog-link-line-date">
                  Feb 16
                </div>
              </div>
            </div>
            <div class="blog-link-line">
              <div class="blog-link-line-first">
                <div class="blog-link-line-icon">
                  <i class="far fa-square"></i>
                </div>
                <div class="blog-link-line-icon">
                  <i class="far fa-star"></i>
                </div>
                <div class="blog-link-line-author">
                  Harvard's CS50 - Class Review
                </div>
              </div>
              <div class="blog-link-line-second">
                <div class="blog-link-line-text">
                  Summary and review of my experience taking Harvard's CS50 course online.
                </div>
                <div class="blog-link-line-date">
                  Feb 16
                </div>
              </div>
            </div>
            <div class="blog-link-line">
              <div class="blog-link-line-first">
                <div class="blog-link-line-icon">
                  <i class="far fa-square"></i>
                </div>
                <div class="blog-link-line-icon">
                  <i class="far fa-star"></i>
                </div>
                <div class="blog-link-line-author">
                  Harvard's CS50 - Class Review
                </div>
              </div>
              <div class="blog-link-line-second">
                <div class="blog-link-line-text">
                  Summary and review of my experience taking Harvard's CS50 course online.
                </div>
                <div class="blog-link-line-date">
                  Feb 16
                </div>
              </div>
            </div>
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
  name: 'blog',
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
.blog-link-line {
  border-bottom: 1px solid #e5e5e5;
  display: flex;
  flex-direction: row;
  height: 25px;
  line-height: 25px;
  width: 100%;
}
.blog-link-line:hover {
  background-color: #f4f4f4;
}
.blog-link-line-author {
  font-weight: bold;
  margin-left: 20px;
}
.blog-link-line-date {
  margin-right: 10px;
}
.blog-link-line-first {
  display: flex;
  justify-content: flex-start;
  width: 50%;
}
.blog-link-line-icon {
  color: #c6c6c6;
  font-weight: normal;
  margin-left: 8px;
}
.blog-link-line-second {
  display: flex;
  font-weight: bold;
  justify-content: space-between;
  width: 100%;  
}
.blog-link-line-text {
  font-weight: normal;
}
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
@media only screen and (max-width: 800px)  {
  .sidebar-toggle {
    display: none;
  }
}
h1 {
  font-size: 17.6px;
  font-stretch: 100%;
  font-weight: 400;
}
a {
  color: black;
  text-decoration: none;
}
@media only screen and (max-width: 1040px) {
  .blog-link-line-first {
    width: 100%;
  }
  .blog-link-line-second {
    justify-content: flex-end;
  }
  .blog-link-line-text {
    display: none;
  }
}
@media only screen and (max-width: 560px) {
  .blog-link-line-author {
    margin-left: 10px;
  }
  .blog-link-line-icon {
    display: none;
  }
  .blog-link-line-second {
    width: 30%;
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