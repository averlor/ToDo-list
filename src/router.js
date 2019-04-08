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
      name: 'groupName',
      component: TaskList
    },
    {
      path: '/:groupName/:taskName/edit',
      name: 'taskName',
      component:TaskEdit
    }
  ]
})
