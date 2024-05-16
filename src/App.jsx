import layerBaseImage from './assets/img/layer-base.png'
import layerMiddleImage from './assets/img/layer-middle.png'
import layerFrontImage from './assets/img/layer-front.png'
import dungeonImage from './assets/img/dungeon.jpg'
import { useEffect } from 'react'

function App() {

  useEffect(() => {
    window.addEventListener("scroll", () => {
      let scrollY = window.scrollY;
      document.documentElement.style.setProperty("--scrollTop", `${scrollY}px`)
    })
  }, [])
  

  return (
    <>
      <div className="wrapper">
        <div className="content">
          <header className="header-main">
            <div className="layers">
              <div className="layer-head">
                <div className="caption">Welcome to Parallax Web</div>
                <div className="title">Dark Forest</div>
              </div>
              <div className="img-layer layer-base" style={{ backgroundImage: `url(${layerBaseImage})` }}></div>
              <div className="img-layer layer-middle" style={{ backgroundImage: `url(${layerMiddleImage})` }}></div>
              <div className="img-layer layer-front" style={{ backgroundImage: `url(${layerFrontImage})` }}></div>
            </div>
          </header>
          <article className='article-main' style={{ backgroundImage: `url(${dungeonImage})` }}>
            <div className="m-article-content">
              <h2 className='m-header'>Story To Be Continued</h2>
              <p className='m-paragraph'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <div className="copy">
            ©angel_zd_
            </div>
          </article>
        </div>
      </div>
    </>
  )
}

export default App
