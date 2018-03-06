<template>
  <div class="footer-container">
    <div class="footer-icons">
      <div class="footer-icon">
        <a href="https://www.linkedin.com/in/nateschier/" target="_blank">
          <i class="fab fa-linkedin-in"></i>
        </a>
      </div>
      <div class="footer-icon">
        <a href="https://twitter.com/ntschier" target="_blank">
          <i class="fab fa-twitter"></i>
        </a>
      </div>
      <div class="footer-icon">
        <a href="https://www.instagram.com/ntschier/" target="_blank">
          <i class="fab fa-instagram"></i>
        </a>
      </div>
      <div class="footer-icon">
        <a href="https://github.com/cosst" target="_blank">
          <i class="fab fa-github-alt"></i>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'partial-footer',
  props: ['title']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.footer-container {
  display: flex;
  justify-content: center;
  margin: 10px 0px 30px;
  width: 100%;
}
.footer-icon {
  display: inline-block;
  background-color: transparent;
  background-image: linear-gradient(to bottom,#f5f5f5,#f1f1f1);
  border: 1px solid rgba(0,0,0,0.1);
  border-radius: 2px;
  color: #444;
  height: 27px;
  line-height: 27px;
  margin-right: 10px;
  padding: 0px 8px;
  text-align: center;
}
.footer-icon a {
  color: #444; 
}
.footer-icon a:hover {
  color: #4683ea;
}
@media only screen and (min-width: 801px)  {
  .footer-container {
    display: none;
  }
}
</style>