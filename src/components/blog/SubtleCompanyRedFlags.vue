<template>
  <div class="container">
    <partial-header title="Blog"></partial-header>
    <div class="main">
      <div class="sidebar-toggle">
        <sidebar></sidebar>
      </div>
      <div class="main-container">
        <div class="main-area">
          <email-title subject="Subtle Company Red Flags" title="Blog"></email-title>
          <div class="main-content">
            <email-header-blog date="3/22/17"></email-header-blog>
            <p>
              <i>My Quora response to "What are the subtle red flags to look for in a seemingly good company?"</i>
            </p>
            <p>
              A few key ones that I always look out for:
              <ul class="bullet-list">
                <li>
                  High turnover - Read reviews on Glassdoor, understand/ask why there is a vacancy for a role, see if same jobs are always posted on their site, look at LinkedIn to see how long people stay, etc.
                </li>
                <li>
                  Inflexibility/scare tactics when it comes to offers - Most companies request an answer by a certain date, but a company demanding a response immediately and/or not willing to budge to give you time to think is often a bad sign; a good company should want employees who are making an informed, confident decision and shouldn’t be rushing a potentially poor decision.
                </li>
                <li>
                  Unenthusiastic interviewers - Ask the people who interview you what they like most about the company, what they are excited about, what challenges the company faces, what they would like to change, etc. They should have reasonable (and hopefully positive) answers for all of these things, and you will most certainly learn valuable things about the company. You could learn some not-so-good secrets in the process, and if they are feeding you stock answers that is likely a red flag too.
                </li>
                <li>
                  Response to critique - While the opportunity may not always present itself (and I’m not suggesting slamming the company), if you can find a way to work in a thoughtful/helpful critique of something the company is currently doing (its product, site, etc.) and they react negatively, that is probably a place to avoid. Conversely, if they seem to really appreciate your feedback and want to hear more, that could be a very good sign that it is a company that values input and wants to improve.
                </li>
                <li>
                  Respect as a candidate - Sure hiring managers and interviewers are busy and talk with tons of candidates, and from time to time they may have to reschedule interviews (I am guilty of this), but if you aren’t being treated with kindness and respect during the interview process, you can bet that you will be treated similarly as an employee of the company.
                </li>
                <li>
                  Interest in only fit from their perspective - When I interview, I care as much about whether the job is a fit for you as a person as I do about whether you are a fit for the job. After all, if someone is hired and leaves after several months that is a very undesirable outcome as an employer. A good employer should be learning about your personal goals and interests during the interview process and making sure you’ll excel in and enjoy the position, as opposed to just checking off boxes from their perspective.
                </li>
              </ul>
            </p>
            <p>
              View <a href="http://qr.ae/TU1RxW" target="_blank">my answer on Quora</a>.
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
import PartialHeader from '../partials/PartialHeader'
import Sidebar from '../partials/Sidebar'
import PartialFooter from '../partials/PartialFooter'
import EmailTitle from '../partials/EmailTitle'
import EmailHeaderBlog from '../partials/EmailHeaderBlog'

export default {
  name: 'subtle-company-red-flags',
  components: { PartialHeader, Sidebar, PartialFooter, EmailTitle, EmailHeaderBlog
  },
  metaInfo: {
    title: 'Blog - Subtle Company Red Flags', // set a title
    meta: [
      { name: 'description', content: 'My Quora response to "What are the subtle red flags to look for in a seemingly good company?"'}
    ],
    htmlAttrs: {
      lang: 'en',
      amp: undefined // "amp" has no value
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
p {
  margin: 15px 32.5px;
  width: 80%;
}
.bullet-list {
  margin-left: 30px;
  margin-top: 10px;
}
.bullet-list li {
  margin-top: 5px;
}
.container {
  background-color: white;
  display: flex;
  flex-wrap: wrap;
  font-family: arial,sans-serif;
  justify-content: center;
  margin: 0;
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