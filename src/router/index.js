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
import Page404 from '@/components/Page404'
import MobileInteractions from '@/components/blog/MobileInteractions' 
import DrivingSmarter from '@/components/blog/DrivingSmarter' 
import NamingSidebench from '@/components/blog/NamingSidebench'
import SubtleCompanyRedFlags from '@/components/blog/SubtleCompanyRedFlags'

Vue.component('modal', {
  props: ['img'],
  template: '#modal-template'
})

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
    },
    {
      path: '/blog/mobile-interactions',
      name: 'mobile-interactions',
      component: MobileInteractions
    },
    {
      path: '/blog/driving-smarter',
      name: 'driving-smarter',
      component: DrivingSmarter
    },
    {
      path: '/blog/naming-sidebench',
      name: 'naming-sidebench',
      component: NamingSidebench
    },
    {
      path: '/blog/subtle-company-red-flags',
      name: 'subtle-company-red-flags',
      component: SubtleCompanyRedFlags
    },
    {
      path: '*',
      redirect: '/404'
    },
    {
      path: '/404',
      name: '404',
      component: Page404
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
