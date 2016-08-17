const React = require('react')

class Details extends React.Component {
  render () {
    return (
      <div className='container'>
        <pre style={{textAlign: 'left'}}><code>
          {JSON.stringify(this.props.params, null, 4)}
        </code></pre>
      </div>
    )
  }
}

const { object } = React.PropTypes

Details.propTypes = {
  params: object
}

module.exports = Details
