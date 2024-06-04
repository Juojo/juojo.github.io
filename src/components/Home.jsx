import '../styles/Home.css'

function Home() {
  return (
    <>
        <div className='home-wrapper'>
            
            <header>
                <div className="title">
                    <img className='logoEx' src="./img/logoEx/white-noblur-25.png" alt="logo" />
                    <h1>Jnmrro</h1>
                </div>

                <ul className='home-buttons'>
                    <li><a className='btn' href="http://www.github.com/juojo" target="_blank" rel="noopener noreferrer">Developer</a></li>
                    <li><a className='btn' href="http://www.behance.com/jnmrro" target="_blank" rel="noopener noreferrer">Designer</a></li>
                    <li><a className='btn' href="https://www.youtube.com/channel/UCnm2bHBb70hkYQ814uWc-zw" target="_blank" rel="noopener noreferrer">Video Editor</a></li>
                </ul>
            </header>
            

            <div className="home-bg">
                {/* <img src="./img/bg/home-gray.png" alt="" /> */}
            </div>
            

        </div>
      
    </>
  )
}

export default Home
