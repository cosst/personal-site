<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  metaInfo: {
    title: 'Nate Schier', // set a title
    titleTemplate: '%s - Nate Schier',
    htmlAttrs: {
      lang: 'en',
      amp: undefined // "amp" has no value
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
html, body, div, span, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
abbr, address, cite, code,
del, dfn, em, img, ins, kbd, q, samp,
small, strong, sub, sup, var,
b, i,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section, summary,
time, mark, audio, video {
 margin:0;
 padding:0;
 border:0;
 outline:0;
 font-size:100%;
 vertical-align:baseline;
 background:transparent;
}
a {
  text-decoration: none;
}
#app {
  font-family: TimesNewRoman, "Times New Roman", Times, Baskerville, Georgia, serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: lightgrey;
  color: black;
  margin-top: 0px;
}
p {
  font-size: 120%;
  margin: 15px 10px;
  width: 95%;
}
@media only screen and (min-width: 415px)  {
  p {
    font-size: 100%;
    margin: 15px 32.5px;
    width: 80%;
  }
}
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 500px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
  font-family: TimesNewRoman, "Times New Roman", Times, Baskerville, Georgia, serif;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  background: -webkit-linear-gradient(top,#4387fd,#4683ea);
  border: 1px solid transparent;
  border-top-right-radius: 2px;
  border-top-left-radius: 0px;
  border-bottom-right-radius: 2px;
  border-bottom-left-radius: 0px;
  color: white;
  display: inline-block;
  font-size: 14px;
  font-weight: 700;
  height: 40px;
  padding: 10px 20px;
  width: auto;
}
.modal-default-button:active {
  background: -webkit-linear-gradient(top,#3c7ae4,#3f76d3);
  box-shadow: inset 0 2px 0 rgba(0,0,0,.15);
}
.modal-default-button:focus {
  box-shadow: inset 0 0 0 1px rgba(255,255,255,0.5);
  outline-width: 0px;
}
.modal-default-button:hover {
  cursor: pointer;
}
.modal-enter {
  opacity: 0;
}
.modal-leave-active {
  opacity: 0;
}
.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
