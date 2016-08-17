const React = require('react')
const ShowCard = require('./ShowCard')
const { object } = React.PropTypes

const Search = React.createClass({
  getInitialState () {
    return {
      searchTerm: ''
    }
  },

  propTypes: {
    route: object
  },

  handleSearchTermChange (event) {
    this.setState({ searchTerm: event.target.value })
  },

  render () {
    return (
      <div className='container'>
        <header className='header'>
          <h1 className='brand'>svideo</h1>
          <input type='text' className='search-input' placeholder='Search'
            value={this.state.searchTerm} onChange={this.handleSearchTermChange} />
        </header>
        <div className='shows'>
          {this.props.route.shows
            .filter((show) => `${show.title} ${show.description}`.toUpperCase().indexOf(this.state.searchTerm.toUpperCase()) >= 0)
            .map((show) => (
              <ShowCard show={show} key={show.imdbID} />
          ))}
        </div>
      </div>
    )
  }
})

module.exports = Search
