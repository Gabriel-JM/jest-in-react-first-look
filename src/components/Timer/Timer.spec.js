import React from 'react'
import { shallow } from 'enzyme'
import Timer from './index'

describe('Timer', () => {
  let container

  beforeEach(() => container = shallow(<Timer />))

  it('should render a <div />', () => {
    expect(container.find('div').length).toBeGreaterThanOrEqual(1)
  })

  it('should render instances of the TimerButton component', () => {
    expect(container.find('TimerButton').length).toBe(3)
  })
})