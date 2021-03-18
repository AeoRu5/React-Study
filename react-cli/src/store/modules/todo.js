import { TODOADD, TODOLISTGET } from '@/store/actionTypes'

const defaultState = {
  todoList: []
}
const todo = (state = defaultState, action) => {
  const newState = JSON.parse(JSON.stringify(state))
  switch (action.type) {
    case TODOADD:
      newState.todoList.push(action.payload)

      return newState
    case TODOLISTGET:
      newState.todoList.push(...action.payload)

      return newState
    default:
      return state
  }
}

export default todo
