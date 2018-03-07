<template>
  <div class="education-bullets">
    <ul>
      <li v-for="bullet in bullets">
        <b>{{bullet.title}}</b>{{bullet.bullet}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'education-bullets',
  props: {
    bullets : {}
  },
  data: function () {
    return {
      bullets : this.bullets
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.education-bullets {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}
h3 {
  font-weight: bold;
}
ul {
  padding: 0;
}
li {
  margin-left: 35px;
  margin-right: 10px;
  padding: 0px;
  text-align: left;
}
@media only screen and (max-width: 460px)  {
  li {
    margin-left: 20px;
    margin-right: 0px;
  }
}
</style>