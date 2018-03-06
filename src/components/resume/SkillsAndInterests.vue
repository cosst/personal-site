<template>
  <div class="skills-and-interests">
    <ul>
      <li v-for="skill in skills">
        <b>{{skill.title}}</b>{{skill.skill}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'skills-and-interests',
  props: {
    skills : {}
  },
  data: function () {
    return {
      skills : this.skills
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.skills-and-interests {
  display: flex;
  justify-content: flex-start;
}
h3 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin: 0;
}
@media only screen and (max-width: 460px)  {
  .skills-and-interests {
    text-align: left;
  }
}
</style>