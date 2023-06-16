import '../Styles/Controls.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faArrowsRotate, faPause } from '@fortawesome/free-solid-svg-icons'

function Controls({ play, setPlay, setReset }) {

    function handleClick(event) {
        const button = event.target.id

        if (button === "start_stop") {
            setPlay((prevState) => !prevState)
        } else {
            setReset(true)
        }
    }

    return (
        <section id='controls'>
            <button 
                type='button' 
                id='start_stop' 
                className='control-button'
                onClick={handleClick}>
                    <FontAwesomeIcon icon={faPlay} />
                    <FontAwesomeIcon icon={faPause} />
            </button>
            <button 
                type='button' 
                id='reset' 
                className='control-button'
                onClick={handleClick}>
                    <FontAwesomeIcon icon={faArrowsRotate} />
            </button>
        </section>
    )
}

export default Controls