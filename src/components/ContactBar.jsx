import '../styles/ContactBar.css'

function ContactBar() {
  return (
    <>
        <div className='contactbar-wrapper'>
            <ul className='contactbar-list'>
                <li><a href="mailto:minarro.juanmartin@gmail.com">CONTACT: minarro.juanmartin@gmail.com</a></li>
                <li><a href="https://github.com/Juojo/juojo.github.io" target="_blank" rel="noopener noreferrer">[WEBSITE UNDER CONSTRUCTION]</a></li>
                {/* <li>17:38:22</li>
                <li>34.6037°S 58.3816°W</li> */}
            </ul>

        </div>
    </>
  )
}

export default ContactBar
