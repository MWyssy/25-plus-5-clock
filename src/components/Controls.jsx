import '../Styles/Controls.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faArrowsRotate, faPause } from '@fortawesome/free-solid-svg-icons'

function Controls() {

    return (
        <section id='controls'>
            <button type='button' id='start_stop' className='control-button'>
                <FontAwesomeIcon icon={faPlay} />
                <FontAwesomeIcon icon={faPause} />
            </button>
            <button type='button' id='reset' className='control-button'>
                <FontAwesomeIcon icon={faArrowsRotate} />
            </button>
        </section>
    )
}

export default Controls