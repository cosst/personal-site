<template>
  <div class="container">
    <partial-header title="Resume"></partial-header>
    <div class="main">
      <div class="sidebar-toggle">
        <sidebar></sidebar>
      </div>
        <div class="resume-container">
          <email-title subject="The ol' Curriculum Vitae" title="Resume"></email-title>
          <div class="resume-top-border">
          </div>
          <div class="download-resume">
            <a href="/static/nate-schier-resume.pdf" download>
              <i class="fas fa-cloud-download-alt"></i>
              Download PDF Resume
            </a>
          </div>
          <div class="page">
            <div class="page-text">
              <div>
                <h1>NATE SCHIER</h1>
                <div class="heading-text">Los Angeles, CA 90012</div>
                <div class="heading-text">808-294-5948 | <a href="mailto:nathaniel.schier@gmail.com">nathaniel.schier@gmail.com</a></div>
                <div class="heading-text-fa">
                  <a href="https://www.linkedin.com/in/nateschier/" target="_blank">
                    <i class="fab fa-linkedin fa-2x"></i> 
                  </a>
                  <a href="https://github.com/cosst" target="_blank">
                    <i class="fab fa-github-square fa-2x"></i>
                  </a>
                </div>
              </div>
              <div>
                <section-header heading="SUMMARY"></section-header>
              </div>
              <div>
                <p class="summary-text">
                  After co-founding and growing Sidebench for 5 years (#329 on the Inc. 500 list for 2017), I decided to leave the company in July 2017 to fulfill a long time desire to build my own software engineering skillset. Currently interested in contract work, apprenticeships, and potentially full-time positions with a high-performing team where I can both contribute and learn.
                </p>
              </div>
              <div>
                <section-header heading="PROFESSIONAL EXPERIENCE"></section-header>
              </div>
              <div>
                <company-location-header company="Full Stack JavaScript Engineer" location="Los Angeles, CA"></company-location-header>
                <position-dates-header position="Contract & Self-Study" dates="September 2017 - Present"></position-dates-header>
                <position-bullets :bullets='selfStudy'></position-bullets>
                <position-bullets-ul :bullets='selfStudy2'></position-bullets-ul>
              </div>
              <div>
                <company-location-header company="Sidebench" location="Los Angeles, CA"></company-location-header>
                <position-dates-header position="Co-Founder & Director" dates="April 2012 - July 2017"></position-dates-header>
                <position-bullets :bullets='sidebench'></position-bullets>
                <awards-bullets :bullets='sidebenchAwards'></awards-bullets>
                <position-bullets :bullets='sidebench2'></position-bullets>
              </div>
              <div>
                <company-location-header company="Elm Talent Group" location="New Haven, CT"></company-location-header>
                <position-dates-header position="Recruiting Associate & First Employee" dates="August 2011 - September 2013"></position-dates-header>
                <position-bullets :bullets='elm'></position-bullets>
              </div>
              <div>
                <company-location-header company="Hawaii Literacy" location="Honolulu, HI"></company-location-header>
                <position-dates-header position="ESL Center Director" dates="June 2010 - May 2011"></position-dates-header>
                <position-bullets :bullets='hawaii'></position-bullets>
              </div>
              <div>
                <section-header heading="EDUCATION"></section-header>
              </div>
              <div>
                <company-location-header company="Pomona College" location="Claremont, CA"></company-location-header>
                <position-dates-header position="B.A. English" dates="May 2010"></position-dates-header>
                <education-bullets :bullets='pomona'></education-bullets>
              </div>
              <div>
                <section-header heading="SKILLS & INTERESTS"></section-header>
                <skills-and-interests :skills='skills'></skills-and-interests>
              </div>
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
import SectionHeader from './resume/SectionHeader'
import CompanyLocationHeader from './resume/CompanyLocationHeader'
import PositionDatesHeader from './resume/PositionDatesHeader'
import PositionBullets from './resume/PositionBullets'
import SkillsAndInterests from './resume/SkillsAndInterests'
import EducationBullets from './resume/EducationBullets'
import AwardsBullets from './resume/AwardsBullets'
import PositionBulletsUl from './resume/PositionBulletsUl'

export default {
  name: 'resume',
  components: { PartialHeader, Sidebar, PartialFooter, EmailTitle, SectionHeader, CompanyLocationHeader, PositionDatesHeader, PositionBullets, EducationBullets, SkillsAndInterests, AwardsBullets, PositionBulletsUl
  },
  metaInfo: {
    title: 'Resume', // set a title
    meta: [
      { name: 'description', content: 'Resume for Nate Schier, an independent full stack engineer and consultant based in Los Angeles with a primary focus on JavaScript.'},
      { property: 'og:title', content: 'Resume - Nate Schier'},
      { property: 'og:description', content: 'Resume for Nate Schier, an independent full stack engineer and consultant based in Los Angeles with a primary focus on JavaScript.'},
      { property: 'og:image', content: 'http://www.nateschier.com/static/oswald.png'},
      { property: 'og:url', content: 'http://www.nateschier.com/resume'}
    ],
    htmlAttrs: {
      lang: 'en',
      amp: undefined // "amp" has no value
    }
  },
  data: function () {
    return {
      selfStudy: [
        {bullet: "Focus primarily on full-stack JavaScript and more specifically React & Node"},
        {bullet: "Learn through a mix of contract work, my own projects, tutorials, online reading, and contributing to open source"},
        {bullet: "Enrolled in Harvard’s CS50x to build foundational CS knowledge; estimated completion: March 2018"}
      ],
      selfStudy2: [
        {title: "GitHub profile", text: ": https://github.com/cosst"},
        {title: "Technologies", text: ": JavaScript, React, Vue, Node, Python, Express, MongoDB, RethinkDB, REST APIs, Mocha, Chai, webpack, Babel, Git, Yarn/npm, Heroku, Firebase"}
      ],
      sidebench: [
        {bullet: "Co-founded a leading LA-based product consulting company; bootstrapped it to $2.5m revenue in 2016"},
        {bullet: "Ranked #329 on the 2017 Inc. 500 list with 3-year growth of 1346%"},
        {bullet: "Responsible for everything early on; as company grew I focused primarily on internal operations, hiring & retention, and high-level account management along with some sales"},
        {bullet: "Grew company from a group of remote contractors in 2012 to an in-house team of 20 employees in 2017; served as hiring manager across design, product, and engineering teams"},
        {bullet: "Helped clients identify, design, develop, and launch strategic technology solutions; clients included Red Bull, Oakley, Andreessen Horowitz, NBC Universal, Inland Empire Health Plan, and Sony"}
      ],
      sidebenchAwards: [
        {bullet: "Top 5 Enterprise App & Web Developers in America (Clutch)"},
        {bullet: "Top 5 Mobile App Developers in Los Angeles (SourcingLine)"},
        {bullet: "Most Promising Enterprise Mobility Solution Providers (CIO Review Magazine)"},
        {bullet: "2017 Social Impact App - nOCD (Mobile UX Awards)"}
      ],
      sidebench2: [
        {bullet: "Left company voluntarily in July 2017 to build personal software engineering skillset"}
      ],
      elm: [
        {bullet: "Connected intelligent early-career talent with elite retained clients in the finance, tech, and life science sectors"},
        {bullet: "Responsible for client and candidate management, sourcing, screening, and closure; personally placed 25+ candidates at Bridgewater Associates, one of the most selective buy-side institutions in the New York area"},
        {bullet: "As the first employee, helped name, brand, and build the company; implemented structure and training procedures in order to successfully onboard new Recruiting Associates"}
      ],
      hawaii: [
        {bullet: "Managed and taught at English literacy non-profit; promoted from volunteer to lead teacher to director over the course of three months; provided free ESL instruction for ~250 students a year; grew center by 100% in one year"}
      ],
      pomona: [
        {title: "Extracurricular Activities", bullet: ": Rugby (2010 D2 National Champions), Varsity Football, ITS Helpdesk"},
        {title: "Honors", bullet: ": Pomona College Scholar, National Football Foundation Hampshire Honor Society"},
        {title: "Study Abroad", bullet: ": Beijing (Summer 2008), Edinburgh (Fall 2008)"}
      ],
      skills: [
        {title: "Skills", skill: ": scrappiness, autodidacticism, listening, leadership, empathy, pattern recognition, mnemonic memory, dog whispering"},
        {title: "Interests", skill: ": my dog Daphne, NYT Crosswords, downtown LA, Mad Men, topographical maps, NY-style pizza, rugby, Hawaii"}
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.download-resume {
  margin: 10px 0px auto;
}
.resume-top-border {
  border-top: 1px solid #e5e5e5;
  margin-left: 10px;
  width: 97%;
}
.main {
  display: flex;
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
.resume-container {
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0;
  width: 100%;
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
  border: 1px solid #ccc;
  font-family: TimesNewRoman, "Times New Roman", Times, Baskerville, Georgia, serif;
  max-width: 900px;
  margin: 10px auto;
}
.page-text {
  padding: 50px;
}
.summary-text {
  font-size: 100%;
  margin: 0px 0px 10px;
  text-align: left;
  width: 100%;
}
h1 {
  font-size: 50px;
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
a {
  color: black;
  text-decoration: none;
}
@media only screen and (max-width: 1105px)  {
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
  .heading-text {
    font-size: 12px;
  }
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
  .resume-container {
    margin-left: 212px;
  }
}
</style>