<template>
  <div class="container">
    <partial-header title="Contact"></partial-header>
    <div class="main">
      <div class="sidebar-toggle">
        <sidebar></sidebar>
      </div>
      <div class="main-container">
        <div class="main-area">
          <email-title subject="Thanks for your message!" title="Contact"></email-title>
          <div class="main-content">
            <email-header></email-header>
            <p>
              Hi friend,
            </p>
            <p>
              Thank you for your message. I will get back to you via email shortly.
            </p>
            <p>
              In the meantime, please feel free to connect with me on <a href="https://www.linkedin.com/in/nateschier/" target="_blank">LinkedIn</a> or follow me on <a href="https://twitter.com/ntschier" target="_blank">Twitter</a>, <a href="https://www.instagram.com/ntschier/" target="_blank">Instagram</a>, or <a href="https://github.com/cosst" target="_blank">GitHub</a>.
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
    <partial-footer></partial-footer>
  </div>
</template>

<script>
import PartialHeader from './partials/PartialHeader'
import Sidebar from './partials/Sidebar'
import PartialFooter from './partials/PartialFooter'
import EmailTitle from './partials/EmailTitle'
import EmailHeader from './partials/EmailHeader'

export default {
  name: 'contact-success',
  components: { PartialHeader, Sidebar, PartialFooter, EmailTitle, EmailHeader
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