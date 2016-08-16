/* eslint-env mocha */
const React = require('react')
const chai = require('chai')
const { expect } = chai
const Search = require('../js/Search')
const enzyme = require('enzyme')
const { shallow } = enzyme
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
})
