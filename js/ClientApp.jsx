const React = require('react')
const ReactDOM = require('react-dom')
const div = React.DOM.div
const MyTitle = require('./MyTitle')

const MyFirstComp = () => (  
  <div>
    <MyTitle title='what ever you want' color='rebeccapurple' />
    <MyTitle title='title props' color='#f06d06' />
    <MyTitle title='third title' color='mediumaquamarine' />
    <MyTitle title='fourth title' color='papayawhip' />
  </div>
)

ReactDOM.render(<MyFirstComp />, document.getElementById('app'))
