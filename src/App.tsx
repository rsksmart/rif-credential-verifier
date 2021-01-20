import React from 'react'
import rifCredentialViewerLogo from './assets/images/rif-credential-viewer.svg'
import poweredByRif from './assets/images/powered-by-iov.svg'
import './assets/scss/_index.scss'
import { version } from '../package.json'

function App () {
  return (
    <div className="App">
      <div className="container header">
        <div className="column">
          <img src={rifCredentialViewerLogo} alt="RIF Credential Viewer" />
        </div>
      </div>
      <div className="container content">
        <div className="column">
          Hello World!
        </div>
      </div>
      <div className="container footer">
        <div className="column">
          <img src={poweredByRif} alt="Powered By RIF" />
          <p>Copyright &copy; 2021 IOV Labs. All rights reserved.</p>
          <p>Version {version}</p>
        </div>
      </div>
    </div>
  )
}

export default App
