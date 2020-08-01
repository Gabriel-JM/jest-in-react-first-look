import React, { useState } from 'react'
import './timer.css'
import TimerButton from '../TimerButton'

function Timer() {
  const [minutes, setMinutes] = useState(25)
  const [seconds, setSeconds] = useState(0)
  const [isOn, setIsOn] = useState(false)

  function startTimer() {
    console.log('Starting timer...')
  }

  function stopTimer() {
    console.log('Stopping timer...')
  }

  function resetTimer() {
    console.log('Resetting timer...')
  }

  return (
    <div className="time-container">
      <div className="timer-display"></div>
      <div className="timer-button-container">
        <TimerButton buttonAction={startTimer} buttonValue={'Start'} />
        <TimerButton buttonAction={stopTimer} buttonValue={'Stop'} />
        <TimerButton buttonAction={resetTimer} buttonValue={'Reset'} />
      </div>
    </div>
  )
}

export default Timer
