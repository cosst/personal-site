<template>
  <div class="email-header">
    <div class="user-icon">
      <i class="fas fa-user"></i>
    </div>
    <div class="email-info">
      <h2>Nate Schier</h2> &lt;nathaniel.schier@email.com&gt;
    </div>
    <div id="email-time" class="right-text">
      {{ date }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'email-header-blog',
  props: ['date']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h2 {
  display: inline-block;
}
.email-info {
  display: inline-block;
  height: 22px;
  line-height: 22px;
  width: 250px;
}
.right-text {
  display: inline-block;
  float: right;
  height: 22px;
  line-height: 22px;
  margin: 5px 20px 0px 0px;
  text-align: right;
}
.user-icon {
  background-color: #f5f5f5;
  border: 1px solid #e5e5e5;
  color: #cccccc;
  display: inline-block;
  font-size: 0.8em;
  height: 22px;
  line-height: 22px;
  margin: 5px 0px 0px 5px;
  text-align: center;
  width: 22px;
}
@media only screen and (max-width: 525px) {
  .email-info {
    display: none;
  }
  .right-text {
    display: block;
    float: none;
    margin: 15px 32.5px;
    text-align: left;
  }
  .user-icon {
    display: none;
  }
}
</style>