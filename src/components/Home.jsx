import '../styles/Home.css'
import logo1000 from '../../public/img/logo/logo1000.png'

function Home() {
  return (
    <>
      <div className="home-wrap">
        <div className="home">
            <h1>jnmrro</h1>
            <img className='logo' src={logo1000} alt="Logo" />
            <nav>
            <ul className='nav-items'>
                <li><a href="#">Home</a></li>
                <li>.</li>
                <li><a href="#">Portfolio</a></li>
                <li>.</li>
                <li><a href="#">Contact</a></li>
            </ul>
            </nav>
        </div>
      </div>
    </>
  )
}

export default Home
