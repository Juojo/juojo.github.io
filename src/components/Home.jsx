import '../styles/Home.css'

function Home() {
  return (
    <>
        <div className='home-wrapper'>
            
            <header>
                <div className="title">
                    <img className='logoEx' src="./img/logoEx/white-noblur-25.png" alt="logo" />
                    <h1 className='noselect'>Jnmrro</h1>
                </div>

                <ul className='home-buttons'>
                    {/* <li><a className='btn' href="http://www.github.com/juojo" target="_blank" rel="noopener noreferrer">Developer</a></li> */}
                    <li><a className='btn' href="#designh1" >Designer</a></li>
                    <li><a className='btn' href="#videoh1" >Video Editor</a></li>
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
