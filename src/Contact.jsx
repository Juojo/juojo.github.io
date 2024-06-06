import './styles/Contact.css'
import ContactBar from './components/ContactBar.jsx'

function Contact() {
  return (
    <>
        <ContactBar contact={false} />
        <div className="contact-wrapper">
            <h1>Juan Mar<span className='noselect'> </span>tín Miñarro.</h1>
            <h2><a href="mailto:minarro.juanmartin@gmail.com">minarro.juanmartin@gmail.com</a></h2>
            <h2><a href="https://www.linkedin.com/in/jnmrro/" target="_blank" rel="noopener noreferrer">LinkedIn</a></h2>
        </div>
    </>
  )
}

export default Contact
