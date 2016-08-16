const React = require('react')
const ShowCard = require('./ShowCard')
const data = require('../public/data')

const Search = React.createClass({
  render () {
    return (
      <div className='container'>
        <header className='header'>
          <h1 className='brand'>svideo</h1>
          <input type='text' className='search-input' placeholder='Search' />
        </header>
        <div className='shows'>
          {data.shows.map((show) => (
            <ShowCard show={show} key={show.imdbID} />
          ))}
        </div>
      </div>
    )
  }
})

module.exports = Search
