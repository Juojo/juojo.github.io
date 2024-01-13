import { useEffect } from 'react';
import '../styles/Home.css'
//import logo1000 from '../../public/img/logo/logo1000.png'

function Home() {
  
  // var sticky = nav.offsetTop;

  // function handleScroll() {
  //   if (window.scrollY >= sticky) {
  //     nav.classList.add('sticky-nav')
  //   } else {
  //     nav.classList.remove('sticky-nav')
  //   }
  // }

  useEffect(() => {

    var nav = document.getElementById('nav');
    var navRect = nav.getBoundingClientRect;
    var homeWrap = document.getElementById('home-wrap');
    var clientHeight = visualViewport.height; // Asign offsetHeight for the first time
    var positionTracker = document.getElementById('position-tracker')

    //window.addEventListener('resize', handleOffsetHeight) // Calls handleOffsetHeight to update whenever the user resize the window
    window.addEventListener('scroll', function () {
      console.log(nav.offsetTop + " - " + this.scrollY);

      if (nav.offsetTop <= this.scrollY) {
        nav.classList.add('sticky-nav')
        console.log("Sticky add");
      } else {
        nav.classList.remove('sticky-nav')
        console.log("Sticky remove");
      }
      
    });

    function handleOffsetHeight() {
      if (homeWrap) {
        //clientHeight = homeWrap.offsetHeight;
        clientHeight = this.visualViewport.height;
      }
    }

  }, []);

  return (
    <>
      <div id="home-wrap" className="home-wrap">
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
