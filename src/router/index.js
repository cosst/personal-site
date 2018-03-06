import Vue from 'vue'
import Router from 'vue-router'
import Meta from 'vue-meta'

import Home from '@/components/Home'
import Resume from '@/components/Resume'
import About from '@/components/About'
import Blog from '@/components/Blog'
import Daphne from '@/components/Daphne'
import Contact from '@/components/Contact'
import ContactSuccess from '@/components/ContactSuccess'

Vue.use(Router)
Vue.use(Meta)

export default new Router({
  mode: 'history',
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
      path: '/about',
      name: 'about',
      component: About
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
    },
    {
      path: '/contact-success',
      name: 'contact-success',
      component: ContactSuccess
    }
  ],
  scrollBehavior (to, from, savedPosition) {
  if (savedPosition) {
    return savedPosition
  } else {
    return { x: 0, y: 0 }
  }
}
})
