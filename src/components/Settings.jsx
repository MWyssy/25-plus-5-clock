import '../Styles/Settings.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareCaretUp, faSquareCaretDown } from '@fortawesome/free-solid-svg-icons'

function Settings() {

    return (
        <>
            <section id='set-break'>
                <h2 id='break-label'>Break Length</h2>
                <button 
                    type='button' 
                    id='break-increment' 
                    className='settings-button'>
                        <FontAwesomeIcon icon={faSquareCaretUp} />
                </button>
                <h3 id='break-length'>5</h3>
                <button 
                    type='button' 
                    id='break-decrement' 
                    className='settings-button'>
                        <FontAwesomeIcon icon={faSquareCaretDown} />
                </button>
            </section>
            <section id='set-session'>
                <h2 id='session-label'>Session Length</h2>
                <button 
                    type='button' 
                    id='session-increment' 
                    className='settings-button'>
                        <FontAwesomeIcon icon={faSquareCaretUp} />
                </button>
                <h3 id='session-length'>25</h3>
                <button 
                    type='button' 
                    id='session-decrement' 
                    className='settings-button'>
                        <FontAwesomeIcon icon={faSquareCaretDown} />
                </button>
            </section>
        </>
    )
}

export default Settings