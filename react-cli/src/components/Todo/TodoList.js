import { Component } from 'react'
import PropTypes from 'prop-types'
import store from '@/store'
import { todo_add, todo_list_request } from '@/store/actionCreator'
import { Button } from 'antd'
import TodoItem from './TodoItem'
import './TodoList.less'

class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      ...store.getState().todo,
      todo: ''
    }
  }
  componentDidMount() {
    store.subscribe(() => this.setState({
      ...store.getState().todo,
      todo: ''
    }))
    const action = todo_list_request()
    store.dispatch(action)
  }
  render() {
    return (
      <div className="todo-list-box">
        <div className="todo-add">
          <input
            className="todo-input"
            value={this.state.todo}
            onChange={this.inputChange.bind(this)}
            onKeyDown={this.todoAdd.bind(this)} />

          <Button type="primary" onClick={this.todoAdd.bind(this)}>Add Todo</Button>
        </div>
        {
          this.state.todoList.length !== 0 ? (
            <div className="todo-list">
              {
                this.state.todoList.map((item, index) => {
                  return (
                    <TodoItem
                      content={item}
                      index={index}
                      key={index}
                      method_del={() => this.todoDel(index)} />
                  )
                })
              }
            </div>
          ) : null
        }
      </div>
    )
  }
  inputChange(e) {
    this.setState({
      todo: e.target.value
    })
  }
  todoAdd(e) {
    if (!this.state.todo) return;
    if (e.key !== 'Enter' && e.type !== 'click') return
    const action = todo_add(this.state.todo)
    store.dispatch(action)
  }
  todoDel(index) {
    const newTodoList = this.state.todoList
    newTodoList.splice(index, 1)
    this.setState({
      todoList: newTodoList
    }, _ => {
      console.log(this.state.todoList)
    })
  }
}
TodoList.defaultProps = {
  text: 'Hello TodoList!'
}
TodoList.propTypes = {
  text: PropTypes.string
}

export default TodoList
