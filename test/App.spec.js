/* eslint-env mocha */
const React = require('react')
const chai = require('chai')
const { expect } = chai
const Search = require('../js/Search')
const enzyme = require('enzyme')
const { shallow, mount } = enzyme
const ShowCard = require('../js/ShowCard')
const data = require('../public/data')
const { store, reducer } = require('../js/Store')

// add x to it, then the test is pending without running
describe('<Search />', () => {
  xit('should pass', () => {
    expect(1 + 1 === 2).to.be.true
  })
  xit('should render as many shows as there are data for', () => {
    const wrapper = shallow(<Search />)
    console.log(wrapper.debug())
    expect(wrapper.find(ShowCard).length).to.equal(data.shows.length)
  })
})

describe('Store', () => {
  it('should bootstrap', () => {
    const state = reducer(undefined, { type: '@@redux/INIT' })
    expect(state).to.deep.equal({ searchTerm: '' })
  })
  it('should handle setSearchTerm actions', () => {
    const state = reducer({ searchTerm: 'some random string' }, { type: 'setSearchTerm', value: 'correct string'})
    expect(state).to.deep.equal({ searchTerm: 'correct string' })
  })
})
