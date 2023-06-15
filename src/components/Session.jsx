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

    useEffect(() => {
        if (reset) {
            setSeconds(0)
            setTimerType('Session') 
            beepRef.current.load()
            document.getElementById("time-left").style.color = "var(--dark)"
            setSessionLength(25)
            setBreakLength(5)
            setPlay(false)
            setSessionTime(25)
            setBreakTime(5)
            setReset(false)
        }
    }, [reset])

       
    function pad(num) {
        return num < 10 ? "0" + num : num;
    }
    
    useEffect(() => {
        if (play) {
            const intervalId = setInterval(() => {
                    if (seconds <= 0) {
                        if (sessionTime <= 0 || breakTime <= 0) {
                            beepRef.current.play()
                            if (timerType === 'Session') {
                                clearInterval(intervalId)
                                setTimerType('Break')
                                setSessionTime(sessionLength)
                                setBreakTime(breakLength)
                            } else {
                                clearInterval(intervalId)
                                setTimerType('Session')
                                setSessionTime(sessionLength)
                                setBreakTime(breakLength)
                            }
                        } else {
                            setSeconds(59)
                            if (timerType === 'Session') {
                                clearInterval(intervalId)
                                setSessionTime(sessionTime - 1)
                            } else {
                                clearInterval(intervalId)
                                setBreakTime(breakTime - 1)
                            }
                        }
                    } else {
                        clearInterval(intervalId)
                        setSeconds(seconds - 1)
                    }
            }, 1000)
        } 
    }, [play, seconds, timerType, reset])

    return (
        <section id='session'>
            <h2 id='timer-label'>{timerType}</h2>
            <h2 id='time-left'>
                {timerType === "Session" 
                    ? `${pad(sessionTime)}:${pad(seconds)}` 
                    : `${pad(breakTime)}:${pad(seconds)}`}
            </h2>
            <audio src={bell} ref={beepRef} id='beep'></audio>
        </section>
    )
}

export default Session