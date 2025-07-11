import '../styles/ContactBar.css'
import Time from "./Time.jsx";

function ContactBar({ contact }) {
  return (
    <>
        <div className='contactbar-wrapper'>
            <ul className='contactbar-list'>
                {/* <li><a href="">ABOUT ME</a></li> */}
                {contact ? <li><a href="/contact">CONTACT</a></li> : <li><a href="/">GO BACK</a></li>}
                <li id='time-display'>
                    <span> <Time timeZoneOffset={-3}/> </span> 
                </li>
                <li>34.6037°S 58.3816°W</li>
            </ul>

        </div>
    </>
  )
}

export default ContactBar
