<template>
  <div class="container">
    <partial-header title="Blog"></partial-header>
    <div class="main">
      <div class="sidebar-toggle">
        <sidebar></sidebar>
      </div>
      <div class="main-container">
        <div class="main-area">
          <email-title subject="Naming Sidebench" title="Blog"></email-title>
          <div class="main-content">
            <email-header-blog date="4/19/16"></email-header-blog>
            <p>
              <i>A piece by BuiltInLA about how we came up with the name Sidebench.</i>
            </p>
            <p>
              Read <a href="https://www.builtinla.com/2016/04/18/origins-of-4-LA-startups-names" target="_blank">Naming Sidebench</a> on builtinla.com.
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
  name: 'naming-sidebench',
  components: { PartialHeader, Sidebar, PartialFooter, EmailTitle, EmailHeaderBlog
  },
  metaInfo: {
    title: 'Blog - Naming Sidebench', // set a title
    meta: [
      { name: 'description', content: 'How we came up with the name Sidebench - published on the Built in LA blog.'}
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