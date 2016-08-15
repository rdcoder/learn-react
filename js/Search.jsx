const React = require('react')
const data = require('../public/data')

const Search = () => (
  <div className='container'>
    {data.shows.map((show) => (
      <h3>{show.title}</h3>
    ))}
  </div>
)

/*
const Search = () => (
  <div>
    <h1>Search!!</h1>
    <pre><code>
      {JSON.stringify(data, null, 4)}
    </code></pre>
  </div>
)
*/

module.exports = Search
