import '../Styles/Settings.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareCaretUp, faSquareCaretDown } from '@fortawesome/free-solid-svg-icons'

function Settings({ 
    sessionTime, 
    setSessionTime, 
    breakTime, 
    setBreakTime, 
    sessionLength, 
    setSessionLength,
    breakLength,
    setBreakLength 
}) {

    function handleClick(event) {
        const button = event.target.id
        switch (button) {
            case 'break-increment':
                if (breakLength < 60) {
                    setBreakTime(breakTime + 1)
                    setBreakLength(breakLength + 1)
                }
                break;
            case 'break-decrement':
                if (breakLength > 1) {
                    setBreakLength(breakLength - 1)
                    if (breakTime >= 1) {
                        setBreakTime(breakTime - 1)
                    }
                }
                break;
            case 'session-increment':
                if (sessionLength < 60) {
                    setSessionTime(sessionTime + 1)
                    setSessionLength(sessionLength + 1)
                }
                break;
            case 'session-decrement':
                if (sessionLength > 1) {
                    setSessionLength(sessionLength - 1)
                    if (sessionTime >= 1) {
                        setSessionTime(sessionTime - 1)
                    }
                }
                break;
        }
    }

    return (
        <>
            <section id='set-break'>
                <h2 id='break-label'>Break Length</h2>
                <button 
                    type='button' 
                    id='break-increment' 
                    className='settings-button'
                    onClick={handleClick}>
                        <FontAwesomeIcon icon={faSquareCaretUp} />
                </button>
                <h3 id='break-length'>{breakLength}</h3>
                <button 
                    type='button' 
                    id='break-decrement' 
                    className='settings-button'
                    onClick={handleClick}>
                        <FontAwesomeIcon icon={faSquareCaretDown} />
                </button>
            </section>
            <section id='set-session'>
                <h2 id='session-label'>Session Length</h2>
                <button 
                    type='button' 
                    id='session-increment' 
                    className='settings-button'
                    onClick={handleClick}>
                        <FontAwesomeIcon icon={faSquareCaretUp} />
                </button>
                <h3 id='session-length'>{sessionLength}</h3>
                <button 
                    type='button' 
                    id='session-decrement' 
                    className='settings-button'
                    onClick={handleClick}>
                        <FontAwesomeIcon icon={faSquareCaretDown} />
                </button>
            </section>
        </>
    )
}

export default Settings