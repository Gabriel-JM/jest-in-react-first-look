import React from 'react'
import { shallow, mount } from 'enzyme'
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

describe('mounted Timer', () => {
  let container

  beforeEach(() => container = mount(<Timer />))

  it('invokes startTimer when the start button is clicked', () => {
    const spy = jest.spyOn(container.instance(), 'startTimer')

    container.instance().forceUpdate()
    expect(spy).toHaveBeenCalledTimes(0)

    container.find('.start-timer').first().simulate('click')
    expect(spy).toHaveBeenCalledTimes(1)
  })

  it('invokes stopTimer when the stop button is clicked', () => {
    const spy = jest.spyOn(container.instance(), 'stopTimer')

    container.instance().forceUpdate()
    expect(spy).toHaveBeenCalledTimes(0)
    
    container.find('.stop-timer').first().simulate('click')
    expect(spy).toHaveBeenCalledTimes(1)
  })

  it('invokes resetTimer when the reset button is clicked', () => {
    const spy = jest.spyOn(container.instance(), 'resetTimer')

    container.instance().forceUpdate()
    expect(spy).toHaveBeenCalledTimes(0)
    
    container.find('.reset-timer').first().simulate('click')
    expect(spy).toHaveBeenCalledTimes(1)
  })

  it('should change isOn state to true when the start button is clicked', () => {
    container.instance().forceUpdate()
    container.find('.start-timer').first().simulate('click')

    expect(container.instance().state.isOn).toBe(true)
  })

  it('should change isOn state to false when the stop button is clicked', () => {
    container.instance().forceUpdate()
    container.find('.stop-timer').first().simulate('click')

    expect(container.instance().state.isOn).toBe(false)
  })

  it('should change isOn state to false when the reset button is clicked', () => {
    container.instance().forceUpdate()
    container.find('.reset-timer').first().simulate('click')

    const { isOn, minutes, seconds } = container.instance().state

    expect(isOn).toBe(false)
    expect(minutes).toBe(25)
    expect(seconds).toBe(0)
  })
})
