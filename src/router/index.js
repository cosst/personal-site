import Vue from 'vue'
import Router from 'vue-router'
import ResumePage from '@/components/ResumePage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'resume-page',
      component: ResumePage
    }
  ]
})
