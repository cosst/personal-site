<template>
  <div class="awards-bullets">
    <ul>
      <li>
        <u>Awards</u>:
          <ul>
            <li v-for="bullet in bullets">
              <i>{{bullet.bullet}}</i>
            </li>
          </ul>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'awards-bullets',
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
.awards-bullets {
  display: flex;
  justify-content: space-between;
  margin-top: -10px;
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