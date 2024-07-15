import '../styles/Video.css'
import SectionButtons from './SectionButtons.jsx'

function Video() {
  return (
    <>        
        <div className='video-wrapper'>
            <span id='video-editing-projects'></span>

            <div className="video-title">
                <SectionButtons section={'video'}/>
                <h2 id=''>VIDEO EDITING PROJECTS.</h2> 
            </div>
        
            <div className="video-gallery">
                
                <div className="video-mask">
                    <a href="https://www.youtube.com/watch?v=Es_oMB0LaGM" target="_blank" rel="noopener noreferrer">
                        <img src="img/video-th/flags.png" alt="" />
                        <h3>Hip hop music video</h3>
                    </a>
                    
                </div>

                <div className="video-mask">
                    <a href="https://www.youtube.com/watch?v=-Krv4zRQNwg" target="_blank" rel="noopener noreferrer">
                        <img src="img/video-th/north.png" alt="" />
                        <h3>North Hills music video</h3>
                    </a>
                </div>

                <div className="video-mask">
                    <a href="https://www.youtube.com/watch?v=RZ1NRs_ds-g" target="_blank" rel="noopener noreferrer">
                        <img src="img/video-th/ocular.png" alt="" />
                        <h3>Ocular Sounds Ad</h3>
                    </a>
                </div>
            </div>

        </div>
    </>
  )
}

export default Video
