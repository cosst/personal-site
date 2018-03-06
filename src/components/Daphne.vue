<template>
  <div class="container">
    <partial-header title="Daphne"></partial-header>
    <div class="main">
      <div class="sidebar-toggle">
        <partial-sidebar></partial-sidebar>
      </div>
      <div class="main-container">
        <div class="main-area">
          <email-title subject="This is my dog Daphne" title="Daphne"></email-title>
          <div class="main-content">
            <email-header></email-header>
            <p>
              Hi friend,
            </p>
            <p>
              So while I'm sure you want to learn about me and all, I know the real reason you're here is to see Daphne (AKA Daph, Doodle, Bubba, Mama, etc.).
            </p>
            <p>
              Daphne is a two year old Dogue de Bordeaux (French Mastiff) and lab mix. We got her from <a href="http://www.muchlove.org/" target="_blank">Much Love Animal Rescue</a> in August of 2016 when she was ~6.5 months old. Apparently she had been hit by a car when just a few months old and had turned up injured at the North Central Animal Shelter in LA, where a very wonderful volunteer took a liking to her and got her connected with Much Love. Much Love got her the hip and pelvic surgery she needed, and after a brief stint with some also very wonderful foster parents, she came to live with us in her forever home.
            </p>
            <p>
              Without further ado, some pictures of our sweet lady!
            </p>
            <p class="daphne-image-heading">
              <br>
              <i>Baby Daphne (before we got her)</i>
            </p>
            <p>
              <img class="daphne-image" src="../assets/puppy_daph_01.png" />
              <img class="daphne-image" src="../assets/puppy_daph_02.jpg" />
            </p>
            <p class="daphne-image-heading">
              <br>
              <i>Lounging Daphne</i>
            </p>
            <p>
              <img class="daphne-image" src="../assets/lounging_daph_01.jpg" />
              <img class="daphne-image" src="../assets/lounging_daph_02.jpg" />
            </p>
            <p class="daphne-image-heading">
              <br>
              <i>Playing Daphne</i>
            </p>
            <p>
              <img class="daphne-image" src="../assets/playing_daph_01.png" />
              <img class="daphne-image" src="../assets/bone_daph_01.jpg" />
              <img class="daphne-image" src="../assets/playing_daph_02.jpg" />
            </p>
            <p class="daphne-image-heading">
              <br>
              <i>Bathing Daphne</i>
            </p>
            <p>
              <img class="daphne-image" src="../assets/bath_daph_01.jpg" />
            </p>
            <p class="daphne-image-heading">
              <br>
              <i>Sleeping Daphne</i>
            </p>
            <p>
              <img class="daphne-image" src="../assets/sleeping_daph_03.jpg" />
              <img class="daphne-image" src="../assets/sleeping_daph_02.jpg" />
              <img class="daphne-image" src="../assets/sleeping_daph_01.jpg" />
            </p>
            <p class="daphne-image-heading">
              <br>
              Posing Daphne
            </p>
            <p>
              <img class="daphne-image" src="../assets/cute_daph_01.png" />
              <img class="daphne-image" src="../assets/cute_daph_03.jpg" />
              <img class="daphne-image" src="../assets/bowtie_daph_01.jpg" />
              <img class="daphne-image" src="../assets/cute_daph_02.jpg" />
            </p>
            <p>
              If you've got Daph fever and the only prescription is more Daph, please <router-link to="contact">send me a message</router-link> and I'd be happy to oblige.
            </p>
            <p>
              Cheers,
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
import PartialHeader from './PartialHeader'
import PartialSidebar from './PartialSidebar'
import PartialFooter from './PartialFooter'
import EmailTitle from './EmailTitle'
import EmailHeader from './EmailHeader'

export default {
  name: 'daphne',
  components: { PartialHeader, PartialSidebar, PartialFooter, EmailTitle, EmailHeader
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
p {
  margin: 15px 32.5px;
  width: 80%;
}
.container {
  background-color: white;
  display: flex;
  flex-wrap: wrap;
  font-family: arial,sans-serif;
  justify-content: center;
  margin: 0;
}
.daphne-image {
  max-width: 600px;
  width: 100%;
}
.daphne-image-heading {
  font-style: italic;
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