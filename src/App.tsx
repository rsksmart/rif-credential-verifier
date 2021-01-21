import React, { useState } from 'react'
import rifCredentialViewerLogo from './assets/images/rif-credential-viewer.svg'
import poweredByRif from './assets/images/powered-by-iov.svg'
import './assets/scss/_index.scss'
import { version } from '../package.json'

import { appStatus, appStateInterface, initialState } from './state'
import UserInput from './components/UserInput'
import ErrorComponent from './components/ErrorComponent'
import DecodeDisplay from './components/DecodeDisplay'
import jwtDecode from 'jwt-decode'

function App () {
  const [state, setState] = useState<appStateInterface>(initialState)

  const decode = (jwt: string) => {
    setState({ message: '', status: appStatus.LOADING })

    try {
      const decoded = jwtDecode(jwt)
      const stringify = JSON.stringify(decoded)
      setState({ message: stringify, status: appStatus.DECODED })
    } catch (err: any) {
      setState({ message: `Could not decode JWT: ${err.message}`, status: appStatus.ERROR })
    }
  }

  return (
    <div className="App">
      <div className="container header">
        <div className="column">
          <img src={rifCredentialViewerLogo} alt="RIF Credential Viewer" />
        </div>
      </div>

      <ErrorComponent status={state.status} message={state.message} />

      <div className="container content">
        <div className="column">
          <h2>Credential JWT</h2>
          <UserInput status={state.status} handleDecode={decode} />
        </div>
        <div className="column">
          <h2>Decoded</h2>
          <DecodeDisplay status={state.status} jwt={state.message} />
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
