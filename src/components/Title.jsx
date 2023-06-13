import '../Styles/Title.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

function Title() {
   
    const [darkMode, setDarkMode] = useState(false)

    function handleClick(event) {
        if (darkMode) {
            document.documentElement.style.setProperty('--dark', 'rgb(17, 20, 40)')
            document.documentElement.style.setProperty('--light', 'rgb(242, 242, 240)')
            setDarkMode(false)
        } else {
            document.documentElement.style.setProperty('--light', 'rgb(17, 20, 40)')
            document.documentElement.style.setProperty('--dark', 'rgb(242, 242, 240)')
            setDarkMode(true)
        }
    }

    return (
        <section id='header'>
            <button id='dark-mode' type='submit'>
                { !darkMode ? (<FontAwesomeIcon icon={faMoon} onClick={handleClick}/>)
                : (<FontAwesomeIcon icon={faSun} onClick={handleClick}/>)
                }
            </button>
            <h1>25 + 5 Clock</h1>
        </section>
    )
}

export default Title