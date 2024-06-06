import './styles/App.css'
import Home from './components/Home.jsx'
import ContactBar from './components/ContactBar.jsx'
import Design from './components/Design.jsx'
import Video from './components/Video.jsx'

function App() {
  return (
    <>
      <ContactBar contact={true}/>
      <Home />
      <Design />
      <Video />
    </>
  )
}

export default App
