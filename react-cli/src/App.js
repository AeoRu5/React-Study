import { Component } from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom"
import routes from '@/router'
import './App.less'

class App extends Component {
  render() {
    return (
      <Router>
        {
          routes.map(item => {
            return (
              <Route key={item.id} path={item.path} component={item.component} />
            )
          })
        }
      </Router>
    )
  }
}

export default App
