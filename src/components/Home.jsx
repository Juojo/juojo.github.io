import '../styles/Home.css'
//import logo1000 from '../../public/img/logo/logo1000.png'

function Home() {
  var nav = document.getElementById('nav');
  var sticky = nav.offsetTop;

  function handleScroll() {
    if (window.scrollY >= sticky) {
      nav.classList.add('sticky-nav')
    } else {
      nav.classList.remove('sticky-nav')
    }
  }

  //window.onscroll = function() {handleScroll}
  window.addEventListener('scroll', handleScroll);

  return (
    <>
      <div className="home-wrap">
        <div className="home">
            <h1>jnmrro</h1>
            <img className='logo' src='img/logo/logo1000.png' alt="Logo" />
            <nav id='nav'>
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
