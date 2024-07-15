import '../styles/Design.css'
import SectionButtons from './SectionButtons.jsx'

function Design() {
  return (
    <>
        <div className='design-wrapper'>
            <span id='design-projects'></span>

            <div className="design-title">
                <SectionButtons section={'design'}/>
                <h2 id=''>DESIGN PROJECTS.</h2> 
            </div>
            

            <div className="design-gallery">

                <a href="https://www.behance.net/gallery/179318823/Wings" target="_blank" rel="noopener noreferrer">
                    <div className="image-mask">    
                        <img id='wings' src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/1e455c179318823.64f78e2827375.png" alt="" />
                    </div>
                </a>
                

                <a href="https://www.behance.net/gallery/174657169/Chrome-shape" target="_blank" rel="noopener noreferrer">
                    <div className="image-mask">
                        <img src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/cb0f42174657169.64a6201def1ad.png" alt="" />
                    </div>
                </a>

                <a href="https://www.behance.net/gallery/200269651/Logo" target="_blank" rel="noopener noreferrer">
                    <div className="image-mask">
                        <img src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/2bf379200269651.665fa443a9c86.png" alt="" />
                    </div>
                </a>
                
                <a href="https://www.behance.net/gallery/188549887/Night-drive" target="_blank" rel="noopener noreferrer">
                    <div className="image-mask">
                        <img src="https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/72d881188549887.659dbb353fb19.png" alt="" />
                    </div>
                </a>

                <a href="https://www.behance.net/gallery/175401155/Nicki-Nicole-nn" target="_blank" rel="noopener noreferrer">
                    <div className="image-mask">
                        <img id='nn' src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/99f050175401155.64cf2ce796612.png" alt="" />
                    </div>
                </a>
                
                <a href="https://www.behance.net/gallery/192803809/Hold-Me" target="_blank" rel="noopener noreferrer">
                    <div className="image-mask">
                        <img id='holdme' src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/7adcc8192803809.65e1468418cdf.png" alt="" />
                    </div>
                </a>

            </div>

        </div>
    </>
  )
}

export default Design
