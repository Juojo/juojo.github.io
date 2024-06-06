import '../styles/SectionButtons.css'

function SectionButtons({ section }) {

  return (
    <>
        <ul className='buttons-wrapper'>
            {section !== 'design' ? <li><a id='design' className='btn' href="#designh1" >Designer</a></li> : null}
            {section !== 'video' ? <li><a id='video' className='btn' href="#videoh1" >Video Editor</a></li> : null}
            {/* {section !== 'developer' ? <li><a id='developer' className='btn' href="http://www.github.com/juojo" target="_blank" rel="noopener noreferrer">Developer</a></li> : null} */}
        </ul>
    </>
  )
}

export default SectionButtons
