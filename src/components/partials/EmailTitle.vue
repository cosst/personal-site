<template>
<div class="email-title">
  <h1>{{ subject }}</h1>
  <div class="email-title-tag">
    {{ title }}
  </div>
</div>
</template>

<script>
export default {
  name: 'email-title',
  props: ['subject', 'title']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.email-title {
  height: 35px;
  line-height: 35px;
  margin: 0px 8px;
  padding: 6px 5px;
  text-align: left;
  width: 95%;
}
.email-title h1 {
  display: inline-block;
  font-size: 17.6px;
  font-weight: 400;
}
.email-title-tag {
  background-color: rgb(221, 221, 221);
  color: rgb(102, 102, 102);
  display: inline-block;
  height: 19px;
  font-size: 11px;
  font-stretch: 100%;
  font-weight: 400;
  line-height: 19px;
  margin-left: 15px;
  padding: 0px 10px;
}
@media only screen and (max-width: 390px)  {
  .email-title-tag {
    display: none;
  }
}
@media only screen and (max-width: 800px)  {
  .email-title {
    margin-top: 51px;
  }
}
</style>