import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
import index from '../pages/index.vue'
import pageQuiButton from '../pages/pageQuiButton.vue'
import pageQuiList from '../pages/pageQuiList'
import pageQuiNav from '../pages/pageQuiNav'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'Hello', /* 用来识别的 */
    //   component: Hello
    // },
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/btn',
      name: 'btn',
      component: pageQuiButton
    },
    {
      path: '/list',
      name: 'list',
      component: pageQuiList
    },
    {
      path: '/nav',
      name: 'nav',
      component: pageQuiNav
    }
  ]
})
