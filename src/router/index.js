import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Resume from '@/components/Resume'
import Work from '@/components/Work'
import Blog from '@/components/Blog'
import Daphne from '@/components/Daphne'
import Contact from '@/components/Contact'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/resume',
      name: 'resume',
      component: Resume
    },
    {
      path: '/work',
      name: 'work',
      component: Work
    },
    {
      path: '/blog',
      name: 'blog',
      component: Blog
    },
    {
      path: '/daphne',
      name: 'daphne',
      component: Daphne
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    }
  ]
})
