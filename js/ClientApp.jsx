const React = require('react')
// const ReactDOM = require('react-dom')
const { Router, browserHistory } = require('react-router')
const Layout = require('./Layout')
// const Landing = require('./Landing')
// const Search = require('./Search')
// const Details = require('./Details')
// const { shows } = require('../public/data')
const { store } = require('./Store')
const { Provider } = require('react-redux')

if (typeof module !== 'undefined' && module.require) {
  if (typeof require.ensure === 'undefined') {
    require.ensure = require('node-ensure')
  }
}

const rootRoute = {
  component: Layout,
  path: '/',
  indexRoute: {
    getComponet (location, cb) {
      require.ensure ([],(error) => {
        cb(null, require('./Landing'))
      })
    }
  },
  childRoutes: [
    {
      path: 'search',
      getComponet (location, cb) {
        require.ensure([], (error) => {
          cb(null, require('./Search'))  
        })
      }
    },
    {
      path: 'details/:id',
      getComponent (location, cb) {
        require.ensure([], () => {
          cb(null, require('./Details'))
        })
      }
    }
  ]
}

const App = React.createClass({
  render () {
    return (
      <Provider store={store}>
        <Router history={browserHistory} routes={rootRoute} />
      </Provider>
    )
  }
})

App.Routes = rootRoute
App.History = browserHistory

module.exports = App
