const React = require('react')
// const ReactDOM = require('react-dom')
const { Router, Route, IndexRoute, browserHistory } = require('react-router')
const Layout = require('./Layout')
const Landing = require('./Landing')
const Search = require('./Search')
const Details = require('./Details')
// const { shows } = require('../public/data')
const { store } = require('./Store')
const { Provider } = require('react-redux')

const myRoutes = () => (
  <Route path='/' component={Layout} >
    <IndexRoute component={Landing} />
    <Route path='/search' component={Search} />
    <Route path='/details/:id' component={Details} />
  </Route>
)

const App = React.createClass({
  render () {
    return (
      <Provider store={store}>
        <Router history={browserHistory}>
          {myRoutes()}
        </Router>
      </Provider>
    )
  }
})

App.Routes = myRoutes

module.exports = App
