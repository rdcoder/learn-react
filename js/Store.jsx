const redux = require('redux')
const reactRedux = require('react-redux')

const SET_SEARCH_TERM = 'setSearchTerm'

const initialState = {
  searchTerm: ''
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH_TERM:
      const newState = {}
      Object.assign(newState, state, {searchTerm: action.value})
      return newState
    default:
      return state
  }
}

const store = redux.createStore(reducer)

// state to props
const mapStateToProps = (state) => ({ searchTerm: state.searchTerm })
const mapDispatchToProps = (dispatch) => {
  return {
    setSearchTerm: (term) => {
      dispatch({type: SET_SEARCH_TERM, value: term})
    }
  }
}

// architecture: different state to different component's props
// this is a simple example with one store and reducers.
// connect is a wrapper to feed the props to the component in use
// in the case of async:
// 1) dispatch an action to send the request
// 2) when the response is back, dispatch another action to handle the response.
const connector = reactRedux.connect(mapStateToProps, mapDispatchToProps)

module.exports = { connector, store }
