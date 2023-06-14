import { useState } from 'react'
import '../Styles/Session.css'
import bell from '../assets/Bell.wav'

function Session({ 
    sessionTime, 
    setSessionTime,
    sessionLength,
    breakTime, 
    setBreakTime,
    breakLength,
    timerType, 
    setTimerType, 
    play, 
    seconds,
    setSeconds,
    beep 
}) {
    const [switchSession, setSwitchSession] = useState(false)

    function pad(num) {
        return num < 10 ? "0" + num : num;
    }
    
    function timer() {
        if (timerType === "Session") {
            const timerSesh = setInterval(() => {
                if (seconds <= 0) {
                    setSessionTime(sessionTime - 1)
                    setSeconds(59)
                    clearInterval(timerSesh)
                } else {
                    setSeconds(seconds - 1)
                    clearInterval(timerSesh)
                }
                if (sessionTime === 0 && seconds === 1) {
                    setSwitchSession(true)
                }
            }, 100)        
        } else {
            const timerBreak = setInterval(() => {
                if (seconds <= 0) {
                    setBreakTime(breakTime - 1)
                    setSeconds(59)
                    clearInterval(timerBreak)
                } else {
                    setSeconds(seconds - 1)
                    clearInterval(timerBreak)
                }
                if (breakTime === 0 && seconds === 1) {
                    setSwitchSession(true)
                }
            }, 100) 
        }
    }

    if (play) {
        if (!switchSession) {
            if (sessionTime < 1 || breakTime < 1) {
                document.getElementById("time-left").style.color = "red"
            } 
            timer()
        } else if (timerType === "Session") {
            beep.play()
            document.getElementById("time-left").style.color = "var(--dark)"
            setTimerType('Break')
            setSeconds(0)
            setBreakTime(breakLength)
            setSwitchSession(false)
            timer()
        } else {
            beep.play()
            document.getElementById("time-left").style.color = "var(--dark)"
            setTimerType('Session')
            setSeconds(0)
            setSessionTime(sessionLength)
            setSwitchSession(false)
            timer()
        }   
    }

    return (
        <section id='session'>
            <h2 id='timer-label'>{timerType}</h2>
            <h2 id='time-left'>
                {timerType === "Session" 
                    ? `${pad(sessionTime)}:${pad(seconds)}` 
                    : `${pad(breakTime)}:${pad(seconds)}`}
            </h2>
            <audio src={bell} id='beep'></audio>
        </section>
    )
}

export default Session