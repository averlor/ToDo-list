import Vue from 'vue'
import Router from 'vue-router'

import GroupList from './views/GroupList.vue'
import TaskList from './views/TaskList.vue'
import TaskEdit from './views/TaskEdit.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'grouplist',
      component: GroupList
    },
    {
      path: '/:groupName',
      name: 'groupname',
      component: TaskList
    },
    {
      path: '/:groupName/:taskName/edit',
      name: '',
      component:TaskEdit
    }
  ]
})
