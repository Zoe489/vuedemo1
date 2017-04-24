import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
import index from '../pages/index'
import detail from '../pages/detail'
import list from '../pages/list'
import contact from '../pages/contact'
import addnew from '../pages/addnew'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index', /* 用来识别的 */
      component: index
    },
    {
      path: '/detail',
      name: 'detail', /* 用来识别的 */
      component: detail
    },
    {
      path: '/list',
      name: 'list', /* 用来识别的 */
      component: list
    },
    {
      path: '/contact',
      name: 'contact', /* 用来识别的 */
      component: contact
    },
    {
      path: '/addnew',
      name: 'addnew', /* 用来识别的 */
      component: addnew
    }
  ]
})
