<template>
  <div class="container">
    <partial-header title="Blog"></partial-header>
    <div class="main">
      <div class="sidebar-toggle">
        <sidebar></sidebar>
      </div>
      <div class="main-container">
        <div class="main-area">
          <email-title subject="Driving Smarter" title="Blog"></email-title>
          <div class="main-content">
            <email-header-blog date="2/12/14"></email-header-blog>
            <p>
              <i>A (slightly dated) look at tech in the world of driving.</i>
            </p>
            <p>
              Read <a href="https://3qdigital.com/featured/driving-smarter" target="_blank">Driving Smarter</a> on 3qdigital.com.
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
import PartialHeader from '../partials/PartialHeader'
import Sidebar from '../partials/Sidebar'
import PartialFooter from '../partials/PartialFooter'
import EmailTitle from '../partials/EmailTitle'
import EmailHeaderBlog from '../partials/EmailHeaderBlog'

export default {
  name: 'driving-smarter',
  components: { PartialHeader, Sidebar, PartialFooter, EmailTitle, EmailHeaderBlog
  },
  metaInfo: {
    title: 'Blog - Driving Smarter', // set a title
    meta: [
      { name: 'description', content: 'Looking at tech in the world of driving - published on the 3Q Digital blog.'}
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