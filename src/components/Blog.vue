<template>
  <div class="container">
    <partial-header title="Home"></partial-header>
    <div class="main">
      <div class="sidebar-toggle">
        <sidebar></sidebar>
      </div>
      <div class="main-container">
        <div class="main-area">
          <email-title subject="Selected musings" title="Blog"></email-title>
          <div class="main-content">
            <div v-for="post in posts">
              <router-link
                :to="post.link"
                exact
                tag="div"
                class="blog-link-line"
              >
                <div class="blog-link-line-first">
                  <div class="blog-link-line-icon">
                    <i class="far fa-square"></i>
                  </div>
                  <div class="blog-link-line-icon">
                    <i class="far fa-star"></i>
                  </div>
                  <div class="blog-link-line-author">
                    {{ post.title }}
                  </div>
                </div>
                <div class="blog-link-line-second">
                  <div class="blog-link-line-text">
                    {{ post.slug }}
                  </div>
                  <div class="blog-link-line-date">
                    {{ post.date }}
                  </div>
                </div>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <partial-footer></partial-footer>
  </div>
</template>

<script>
import PartialHeader from "./partials/PartialHeader";
import Sidebar from "./partials/Sidebar";
import PartialFooter from "./partials/PartialFooter";
import EmailTitle from "./partials/EmailTitle";
import EmailHeader from "./partials/EmailHeader";

export default {
  name: "blog",
  components: {
    PartialHeader,
    Sidebar,
    PartialFooter,
    EmailTitle,
    EmailHeader,
  },
  data: function () {
    return {
      posts: [
        {
          id: 7,
          title: "Harvard's CS50 - Class Review",
          slug: "Summary and review of my experience taking Harvard's CS50 course online.",
          link: "/contact",
          date: "Feb 28",
        },
        {
          id: 6,
          title: "Leaving My Own Startup",
          slug: "Why I left Sidebench, the company I co-founded, after 5 years.",
          link: "/contact",
          date: "Feb 19",
        },
        {
          id: 5,
          title: "What Language Should I Learn?",
          slug: "A guide and some (hopefully) helpful tips for those getting into the dev world.",
          link: "/",
          date: "Jan 2",
        },
        {
          id: 4,
          title: "Company Red Flags",
          slug: "Subtle red flags to look for in a seemingly good company.",
          link: "/blog/subtle-company-red-flags",
          date: "3/22/17",
        },
        {
          id: 3,
          title: "Naming Sidebench",
          slug: "How we came up with the name Sidebench.",
          link: "/blog/naming-sidebench",
          date: "4/19/16",
        },
        {
          id: 2,
          title: "Driving Smarter",
          slug: "A look at tech in driving.",
          link: "/blog/driving-smarter",
          date: "2/12/14",
        },
        {
          id: 1,
          title: "Mobile Interactions",
          slug: "A guide to optimization.",
          link: "/blog/mobile-interactions",
          date: "1/8/14",
        },
      ],
    };
  },
  metaInfo: {
    title: "Blog", // set a title
    meta: [
      {
        name: "description",
        content:
          "Writings and musings by Nate Schier, an independent full stack engineer and consultant based in Los Angeles with a primary focus on JavaScript.",
      },
      { property: "og:title", content: "Blog - Nate Schier" },
      {
        property: "og:description",
        content:
          "Writings and musings by Nate Schier, an independent full stack engineer and consultant based in Los Angeles with a primary focus on JavaScript.",
      },
      {
        property: "og:image",
        content: "http://www.nateschier.com/static/oswald.png",
      },
      { property: "og:url", content: "http://www.nateschier.com/blog" },
    ],
    htmlAttrs: {
      lang: "en",
      amp: undefined, // "amp" has no value
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.blog-link-line {
  border-bottom: 1px solid #e5e5e5;
  display: flex;
  flex-direction: row;
  height: 25px;
  line-height: 25px;
  width: 100%;
}
.blog-link-line:hover {
  background-color: #f4f4f4;
  cursor: pointer;
}
.blog-link-line-author {
  font-weight: bold;
  margin-left: 20px;
}
.blog-link-line-date {
  margin-right: 10px;
}
.blog-link-line-first {
  display: flex;
  justify-content: flex-start;
  width: 50%;
}
.blog-link-line-icon {
  color: #c6c6c6;
  font-weight: normal;
  margin-left: 8px;
}
.blog-link-line-second {
  display: flex;
  font-weight: bold;
  justify-content: space-between;
  width: 100%;
}
.blog-link-line-text {
  font-weight: normal;
}
.main {
  display: flex;
  width: 100%;
}
.main-container {
  width: 100%;
}
.main-area {
  text-align: left;
}
.main-content {
  border-top: 1px solid #e5e5e5;
  font-size: 12.8px;
  margin: 0px 30px 0px 10px;
}
.main-content a {
  color: #0000ee;
}
.container {
  background-color: white;
  display: flex;
  flex-wrap: wrap;
  font-family: arial, sans-serif;
  justify-content: center;
  margin: 0;
}
@media only screen and (max-width: 800px) {
  .sidebar-toggle {
    display: none;
  }
}
h1 {
  font-size: 17.6px;
  font-stretch: 100%;
  font-weight: 400;
}
a {
  color: black;
  text-decoration: none;
}
@media only screen and (max-width: 1040px) {
  .blog-link-line-first {
    width: 100%;
  }
  .blog-link-line-second {
    justify-content: flex-end;
  }
  .blog-link-line-text {
    display: none;
  }
}
@media only screen and (max-width: 560px) {
  .blog-link-line-author {
    margin-left: 10px;
  }
  .blog-link-line-icon {
    display: none;
  }
  .blog-link-line-second {
    width: 30%;
  }
}
@media only screen and (min-width: 801px) {
  .main {
    margin-top: 112px;
  }
  .main-container {
    margin-left: 212px;
  }
}
</style>