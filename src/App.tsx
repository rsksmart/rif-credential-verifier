import React, { useState } from 'react'
import rifCredentialViewerLogo from './assets/images/rif-credential-viewer.svg'
import poweredByRif from './assets/images/powered-by-iov.svg'
import './assets/scss/_index.scss'
import { version } from '../package.json'
import { appStatus, appStateInterface, initialState } from './state'
import UserInput from './components/UserInput'
import ErrorComponent from './components/ErrorComponent'
import { verifyVerifiableJwt } from './operations'
import LoadingComponent from './components/LoadingComponent'
import PresentationDisplay from './components/PresentationDisplay'

function App () {
  const [appState, setAppState] = useState<appStateInterface>(initialState)

  const decode = (jwt: string, useEthSign: boolean) => {
    setAppState({ ...initialState, status: appStatus.LOADING })

    verifyVerifiableJwt(jwt, useEthSign)
      .then((credential: any) =>
        setAppState({ ...appState, jwt, credential, status: appStatus.DECODED }))
      .catch((err: Error) => setAppState({ ...initialState, message: err.message, status: appStatus.ERROR }))
  }

  return (
    <div className="App">
      <div className="container header">
        <div className="column">
          <img src={rifCredentialViewerLogo} alt="RIF Credential Viewer" />
        </div>
      </div>

      <div className="container content">
        <div className="column column-6">
          <h2>Raw JWT</h2>
          <UserInput disabled={appState.status === appStatus.LOADING} handleDecode={decode} />
        </div>
        <div className="column column-6">
          <h2>Decoded</h2>
          {appState.credential && appState.credential.payload.vp && <PresentationDisplay presentation={appState.credential} />}
          {appState.status === appStatus.ERROR && <ErrorComponent message={appState.message} />}
          {appState.status === appStatus.LOADING && <LoadingComponent />}
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
