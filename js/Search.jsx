const React = require('react')
const ShowCard = require('./ShowCard')
const data = require('../public/data')

class Search extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      searchTerm: 'this is the default searchTerm'
    }
    this.handleSearchTermChange = this.handleSearchTermChange.bind(this)
  }

  handleSearchTermChange (event) {
    this.setState({ searchTerm: event.target.value })
  }

  render () {
    return (
      <div className='container'>
        <header className='header'>
          <h1 className='brand'>svideo: {this.state.searchTerm}</h1>
          <input type='text' className='search-input' placeholder='Search'
            value={this.state.searchTerm} onChange={this.handleSearchTermChange} />
        </header>
        <div className='shows'>
          {data.shows.map((show) => (
            <ShowCard show={show} key={show.imdbID} />
          ))}
        </div>
      </div>
    )
  }
}

module.exports = Search
