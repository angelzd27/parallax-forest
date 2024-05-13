import layerBaseImage from './assets/img/layer-base.png'
import layerMiddleImage from './assets/img/layer-middle.png'
import layerFrontImage from './assets/img/layer-front.png'

function App() {

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
              <div className="img-layer layer-base" style={{backgroundImage: `url(${layerBaseImage})`}}></div>
              <div className="img-layer layer-middle" style={{backgroundImage: `url(${layerMiddleImage})`}}></div>
              <div className="img-layer layer-front" style={{backgroundImage: `url(${layerFrontImage})`}}></div>
            </div>
          </header>
        </div>
      </div>
    </>
  )
}

export default App
