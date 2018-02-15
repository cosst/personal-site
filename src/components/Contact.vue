<template>
  <div class="container">
    <partial-header title="Contact"></partial-header>
    <div class="main">
      <partial-sidebar></partial-sidebar>
      <div class="main-container">
        <div class="main-area">
          <email-title subject="What can I help you with?" title="Contact"></email-title>
          <div class="main-content">
            <email-header></email-header>
            <p>
              Hi friend,
            </p>
            <p>
              Please send me a message below and I will get back to you shortly. The more info you can provide the better!
            </p>
            <p>
              Thanks,
            </p>
            <p>
              Nate
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PartialHeader from './PartialHeader'
import PartialSidebar from './PartialSidebar'
import EmailTitle from './EmailTitle'
import EmailHeader from './EmailHeader'

export default {
  name: 'contact',
  components: { PartialHeader, PartialSidebar, EmailTitle, EmailHeader
  },
  data: function () {
    return {
      selfStudy: [
        {bullet: "Focus primarily on full-stack JavaScript and more specifically React & Node"},
        {bullet: "Learn through a mix of my own projects, tutorials, online reading, and contributing to open source"},
        {bullet: "Enrolled in Harvard’s CS50x to build foundational CS knowledge; estimated completion: February 2018"}
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main {
  display: flex;
  width: 100%;
}
.main-container {
  width: auto;
}
.main-area {
  text-align: left;
}
.main-content {
  border-top: 1px solid #e5e5e5;
  border-bottom: 1px solid #e5e5e5;
  font-size: 12.8px;
  margin: 0px 30px 0px 10px;
  width: 100%;
}
.main-content a {
  color: #0000EE;
}
.container {
  background-color: white;
  display: flex;
  flex-wrap: wrap;
  font-family: arial,sans-serif;
  justify-content: center;
  margin: 0;
}
.heading-text {
  font-size: 14px;
}
.heading-text-fa {
  color: black;
  font-size: 14px;
  margin-top: 2px;
}
.heading-text-fa a {
  color: grey;
  padding: 2px;
}
.page {
  background-color: white;
  border: 1px solid black;
  max-width: 900px;
  margin-top: 10px;
  margin-bottom: 10px;
}
.page-text {
  padding: 50px;
}
.summary-text {
  margin-bottom: 10px;
  text-align: left;
}
h1 {
  font-size: 17.6px;
  font-stretch: 100%;
  font-weight: 400;
}
ul {
  padding: 0;
}
li {
  margin: 0 10px;
}
a {
  color: black;
  text-decoration: none;
}

p {
  margin: 15px 32.5px;
  width: 80%;
}
@media only screen and (max-width: 900px)  {
  .page {
    border: none;
    margin-top: 0px;
    margin-bottom: 0px;
  }
  .page-text {
    padding: 20px;
  }
}
@media only screen and (max-width: 460px)  {
  h1 {
    font-size: 45px;
  }
}
@media only screen and (max-width: 400px)  {
  h1 {
    font-size: 40px;
  }
}
</style>