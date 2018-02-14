import Vue from 'vue'
import Router from 'vue-router'
import ResumePage from '@/components/ResumePage'
import Home from '@/components/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'resume-page',
      component: ResumePage
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    }
  ]
})
