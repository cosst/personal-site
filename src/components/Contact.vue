<template>
  <div class="container">
    <partial-header title="Contact"></partial-header>
    <div class="main">
      <div class="sidebar-toggle">
        <partial-sidebar></partial-sidebar>
      </div>
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
          <div class="contact-form-container">
            <div class="contact-form-body">
              <form action="#">

                <label for="fname">First Name</label>
                <input type="text" id="fname" name="firstname" placeholder="Jenny">

                <label for="lname">Last Name</label>
                <input type="text" id="lname" name="lastname" placeholder="Tutone">

                <label for="email">Email</label>
                <input type="email" id="email" name="email" placeholder="jenny867@gmail.com">

                <label for="message">Message</label>
                <textarea id="message" name="message" placeholder="Can you please stop giving people my number?" style="height:200px"></textarea>

                <input type="submit" value="Submit">

              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <partial-footer></partial-footer>
  </div>
</template>

<script>
import PartialHeader from './PartialHeader'
import PartialSidebar from './PartialSidebar'
import PartialFooter from './PartialFooter'
import EmailTitle from './EmailTitle'
import EmailHeader from './EmailHeader'

export default {
  name: 'contact',
  components: { PartialHeader, PartialSidebar, PartialFooter, EmailTitle, EmailHeader
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
input[type=text], input[type=email], textarea {
  border: 1px solid rgba(0,0,0,0.15);
  font-size: 12.8px;
  margin: 8px 0px;
  padding: 10px;
  width: 100%;
}
input[type=submit] {
  background: -webkit-linear-gradient(top,#4387fd,#4683ea);
  border: 1px solid transparent;
  border-radius: 2px;
  color: white;
  cursor: pointer;
  font-size: 11px;
  font-weight: 700;
  height: 30px;
  padding: 5px;
  text-transform: uppercase;
}
label {
  font-size: 14px;
}
p {
  margin: 15px 32.5px;
  width: 80%;
}
.contact-form-body {
  margin: 0 auto;
  width: 80%;
}
.contact-form-container {
  display: flex;
  justify-content: center;
  margin: 10px 0px 30px 0px;
  width: 100%;
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
.main {
  display: flex;
  width: 100%;
}
.main-area {
  text-align: left;
}
.main-container {
  width: 100%;
}
.main-content {
  border-top: 1px solid #e5e5e5;
  border-bottom: 1px solid #e5e5e5;
  font-size: 12.8px;
  margin: 0px 30px 0px 10px;
}
.main-content a {
  color: #0000EE;
}
@media only screen and (max-width: 800px)  {
  input[type=text], input[type=email], textarea {
    width: 95%;
  }
  .sidebar-toggle {
    display: none;
  }
}
@media only screen and (min-width: 801px)  {
  .main {
    margin-top: 112px;
  }
  .main-container {
    margin-left: 212px;
  }
}
</style>