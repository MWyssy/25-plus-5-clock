import { useEffect, useState } from 'react'
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
    reset,
    setSessionLength,
    setBreakLength,
    setPlay,
    setReset
}) {
    const [switchSession, setSwitchSession] = useState(false)
    const [seconds, setSeconds] = useState(0)
    const [milliseconds, setMilliseconds] = useState(0)
    const beep = document.getElementById('beep')

    useEffect(() => {
        if (reset) {
            setSeconds(0)
            setMilliseconds(100)
            setTimerType('Session') 
            beep.load()
            document.getElementById("time-left").style.color = "var(--dark)"
            setSessionLength(25)
            setBreakLength(5)
            setPlay(false)
            setSessionTime(25)
            setBreakTime(5)
            setReset(false)
        }
    }, [
        reset, 
        setBreakLength, 
        setBreakTime, 
        setPlay, 
        setReset, 
        setSeconds, 
        setSessionLength, 
        setSessionTime, 
        setTimerType 
    ])


        if (play) {
            if (!switchSession) {
                if (sessionTime < 1 || breakTime < 1) {
                    document.getElementById("time-left").style.color = "red"
                } 
                timer()
            } else {
                if (timerType === "Session") {
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
        }
    

    function pad(num) {
        return num < 10 ? "0" + num : num;
    }
    
    function timer() {
        if (timerType === "Session") {
            const timerSesh = setInterval(() => {
                if (!milliseconds) {
                    clearInterval(timerSesh)
                    setMilliseconds(99)
                    setSeconds(seconds - 1)
                } else if (seconds < 0) {
                    clearInterval(timerSesh)
                    setSeconds(59)
                    setSessionTime(sessionTime - 1)
                } else {
                    clearInterval(timerSesh)
                    setMilliseconds(milliseconds - 1)
                }
                if (sessionTime === 0 && seconds < 1) {
                    setSwitchSession(true)
                }
            }, 10)        
        } else {
            const timerBreak = setInterval(() => {
                if (milliseconds === 0) {
                    clearInterval(timerBreak)
                    setMilliseconds(99)
                    setSeconds(seconds - 1)
                } else if (seconds < 0) {
                    clearInterval(timerBreak)
                    setSeconds(59)
                    setBreakTime(breakTime - 1)
                } else {
                    clearInterval(timerBreak)
                    setMilliseconds(milliseconds - 1)
                }
                if (breakTime === 0 && seconds < 1) {
                    setSwitchSession(true)
                }
            }, 10) 
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