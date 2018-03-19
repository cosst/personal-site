<template>
  <div class="site-map">
    Site Menu:
    <ul>
      <router-link to="about" tag="li" class="site-map-links">About</router-link>
      <!-- <router-link to="/blog" tag="li" class="site-map-links">Blog</router-link> -->
      <router-link to="daphne" tag="li" class="site-map-links">Daphne</router-link>
      <router-link to="resume" tag="li" class="site-map-links">Resume</router-link>
      <router-link to="contact" tag="li" class="site-map-links">Contact</router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'site-map'
}
</script>

<style scoped>
.site-map {
  margin-left: 32px;
}
.site-map ul {
  margin: 5px 15px 5px 0px;
}
.site-map li {
  margin-left: 30px;
  padding: 5px 5px;
}
.site-map-links {
  color: #00e;
  cursor: pointer;
}
@media only screen and (max-width: 414px)  {
  .site-map {
    font-size: 120%;
    margin-left: 10px;
  }
}
</style>