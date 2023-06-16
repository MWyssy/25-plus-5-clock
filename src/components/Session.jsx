import { useEffect, useRef, useState } from 'react'
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
    const [seconds, setSeconds] = useState(0)
    const beepRef = useRef(null)
    const intervalRef = useRef(null)

    useEffect(() => {
        if (reset) {
            setSeconds(0)
            setTimerType('Session') 
            setSessionLength(25)
            setBreakLength(5)
            setPlay(false)
            setSessionTime(25)
            setBreakTime(5)
            setReset(false)
            beepRef.current.pause()
            beepRef.current.currentTime = 0
            beepRef.current.load()
        }
    }, [reset])
       
    function pad(num) {
        return num < 10 ? "0" + num : num;
    }
    
    useEffect(() => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current)
        }
        if (play) {
            intervalRef.current = setInterval(() => {
                    if (seconds <= 0) {
                        if (sessionTime <= 0 || breakTime <= 0) {
                            beepRef.current.play()
                            if (timerType === 'Session') {
                                setTimerType('Break')
                                setSessionTime(sessionLength)
                                setBreakTime(breakLength)
                            } else {
                                setTimerType('Session')
                                setSessionTime(sessionLength)
                                setBreakTime(breakLength)
                            }
                        } else {
                            setSeconds(59)
                            if (timerType === 'Session') {
                                setSessionTime(sessionTime - 1)
                            } else {
                                setBreakTime(breakTime - 1)
                            }
                        }
                    } else {
                        setSeconds(seconds - 1)
                    }
            }, 1000)
        }
    }, [play, seconds, timerType, reset])

    return (
        <section id='session'>
            <h2 id='timer-label'>{timerType}</h2>
            <h2 id='time-left' style={{ color: sessionTime < 1 || breakTime < 1 ? "red" : "var(--dark)" }}>
                {timerType === "Session" 
                    ? `${pad(sessionTime)}:${pad(seconds)}` 
                    : `${pad(breakTime)}:${pad(seconds)}`}
            </h2>
            <audio src={bell} ref={beepRef} id='beep'></audio>
        </section>
    )
}

export default Session