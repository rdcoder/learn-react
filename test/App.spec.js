/* eslint-env mocha */
const React = require('react')
const chai = require('chai')
const { expect } = chai
const Search = require('../js/Search')
const enzyme = require('enzyme')
const { shallow, mount } = enzyme
const ShowCard = require('../js/ShowCard')
const data = require('../public/data')

// add x to it, then the test is pending without running
describe('<Search />', () => {
  xit('should pass', () => {
    expect(1 + 1 === 2).to.be.true
  })
  it('should render as many shows as there are data for', () => {
    const wrapper = shallow(<Search />)
    console.log(wrapper.debug())
    expect(wrapper.find(ShowCard).length).to.equal(data.shows.length)
  })
})

describe('<Search />', () => {
  it('should render the brand', () => {
    const wrapper = shallow(<Search />)
    expect(wrapper.contains(<h1 className='brand'>svideo</h1>)).to.be.true
  })

  // mount is slower than shallow. shallow does not allow the interactivity.
  // add another test inside of describe
  // simulate generates an event of change.
  it('should filter correctly given new state', () => {
    const wrapper = mount(<Search />)
    const input = wrapper.find('.search-input')
    input.node.value = 'house'
    input.simulate('change')
    expect(wrapper.state('searchTerm')).to.equal('house')
    expect(wrapper.find('.show-card').length).to.equal(2)
  })
})
