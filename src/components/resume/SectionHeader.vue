<template>
  <div class="section-header">
    <h2>{{ heading }}</h2>
  </div>
</template>

<script>
export default {
  props: ['heading'],
  name: 'section-header'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.section-header {
  border-bottom: 1px solid black;
  display: flex;
  justify-content: flex-start;
  margin-bottom: 3px;
}
h2 {
  font-size: 17px;
  font-weight: bold;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>