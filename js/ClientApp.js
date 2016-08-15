var React = require('react')
var ReactDOM = require('react-dom')
var div = React.DOM.div
var MyTitle = require('./MyTitle')

var MyTitleFactory = React.createFactory(MyTitle)
var ce = React.createElement

var MyFirstComp = (
  div({style: {color: 'green'}},
    React.createElement(MyTitle, {title: 'use props are great 1', color: 'red'}),
    MyTitleFactory({title: 'props are great', color: 'rebeccapurple'}),
    ce(MyTitle, {title: 'props are great 4', color: 'peru'}),
    React.createElement(MyTitle, {title: 'props are great 5', color: 'mediumaquamarine'})
  )
)

ReactDOM.render(MyFirstComp, document.getElementById('app'))
