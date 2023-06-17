import '../Styles/Body.css'
import Controls from './Controls'
import Session from './Session'
import Settings from './Settings'
import { useState, useRef } from 'react'

function Body() {
    const [sessionTime, setSessionTime] = useState(25);
    const [breakTime, setBreakTime] = useState(5);
    const [timerType, setTimerType] = useState('Session')
    const [play, setPlay] = useState(false)
    const [reset, setReset] = useState(false)
    const [sessionLength, setSessionLength] = useState(25)
    const [breakLength, setBreakLength] = useState(5)
    const beepRef = useRef(null)


    const handleReset = () => {
        beepRef.current.pause()
        beepRef.current.currentTime = 0

        setReset(true)
      }
    
    const resetComplete = () => {
        setTimerType('Session')
        setSessionLength(25)
        setBreakLength(5)
        setPlay(false)
        setSessionTime(25)
        setBreakTime(5)
        setReset(false)
    }

    return (
        <>
            <Settings 
                sessionTime={sessionTime} 
                setSessionTime={setSessionTime}
                breakTime={breakTime}
                setBreakTime={setBreakTime}
                sessionLength={sessionLength}
                setSessionLength={setSessionLength}
                breakLength={breakLength}
                setBreakLength={setBreakLength}
            />
            <Session 
                sessionTime={sessionTime}
                setSessionTime={setSessionTime}
                sessionLength={sessionLength}
                breakTime={breakTime}
                setBreakTime={setBreakTime}
                breakLength={breakLength}
                timerType={timerType}
                setTimerType={setTimerType}
                play={play}
                reset={reset}
                setSessionLength={setSessionLength}
                setBreakLength={setBreakLength}
                setPlay={setPlay}
                setReset={setReset}
                onResetComplete={resetComplete}
                beepRef={beepRef}
            />
            <Controls
                setPlay={setPlay}
                setReset={setReset}
                handleReset={handleReset}
                beepRef={beepRef}
            />
        </>
    )
}

export default Body