import axios from 'axios'
import { TODOADD, TODOLISTGET } from './actionTypes'

export const todo_add = (payload) => ({
  type: TODOADD,
  payload
})
export const todo_list_get = (payload) => ({
  type: TODOLISTGET,
  payload
})
/* react-thunk可进行异步redux操作 */
export const todo_list_request = () => {
  return (dispatch) => {
    // axios.get('').then(res => {
    //   const action = todo_add()
    //   dispatch(action)
    // }).catch(e => {

    // })
    const action = todo_list_get(['aeorus', 'aiolos', '兔走'])
    dispatch(action)
  }
}
