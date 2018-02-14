<template>
  <div class="position-dates-header">
    <div class="header-item">
      <h3>{{ position }}</h3>
    </div>
    <div class="header-item second">
      <h3>{{ dates }}</h3>
    </div>
  </div>
</template>

<script>
export default {
  props: ['position', 'dates'],
  name: 'position-dates-header'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.position-dates-header {
  display: flex;
  font-style: italic;
  justify-content: space-between;
}
@media only screen and (max-width: 460px)  {
  .position-dates-header {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .header-item {
    text-align: left;
    width: 100%;
  }
  .second {
    font-size: 90%;
    font-style: normal;
    margin-bottom: 5px;
  }
}
h3 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
</style>