<template>
  <div class="company-location-header">
    <div class="header-item">
      <h3>{{ company }}</h3>
    </div>
    <div class="header-item second">
      <h3>{{ location }}</h3>
    </div>
  </div>
</template>

<script>
export default {
  props: ['company', 'location'],
  name: 'company-location-header'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.company-location-header {
  display: flex;
  justify-content: space-between;
}
@media only screen and (max-width: 460px)  {
  .company-location-header {
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
  }
  .second h3 {
    font-weight: normal;
  }
}
h3 {
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
</style>