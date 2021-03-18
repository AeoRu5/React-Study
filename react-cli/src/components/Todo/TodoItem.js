import { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import './TodoItem.less'

class TodoItem extends Component {
  state = {
    message: 'Hello '
  }
  shouldComponentUpdate(nextProps) {
    return nextProps.content !== this.props.content
  }
  render() {
    console.log('render');
    return (
      <Fragment>
        {/* todo-item */}
        <span
          className="todo-item"
          dangerouslySetInnerHTML={{ __html: this.state.message + this.props.content + '!' }}
          onClick={() => this.handleClick()}></span>
      </Fragment>
    )
  }
  handleClick() {
    this.props.method_del(this.props.index)
  }
}
TodoItem.defaultProps = {
  content: 'aeorus',
  index: 0,
  method_del: () => { }
}
TodoItem.propTypes = {
  content: PropTypes.string,
  index: PropTypes.number,
  method_del: PropTypes.func
}

export default TodoItem
