import React from 'react'
import { shallow } from 'enzyme'
import App from './App'
import Timer from './components/Timer'

describe('App', () => {
  let container

  beforeEach(() => container = shallow(<App />))

  it('should render a <div />', () => {
    expect(container.find('div').length).toBe(1)
    expect(container.find('div').hasClass('app-container')).toBe(true)
  })

  it('should render a Timer component', () => {
    expect(container.containsMatchingElement(<Timer />)).toBe(true)
  })
})

