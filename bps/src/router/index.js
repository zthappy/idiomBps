import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import myanimate from '@/components/myanimate'
import B from '@/components/test'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/a',
      name: 'MyAnimate',
      component: myanimate
    },
    {
      path: '/b',
      name: 'MyAnimate',
      component: B
    }
  ]
})
