import loadable from '@loadable/component'

const routes = [
  {
    id: 0,
    path: '/todo-list/',
    component: loadable(() => import('@/components/Todo/TodoList')),
    exact: true
  },
]

export default routes
