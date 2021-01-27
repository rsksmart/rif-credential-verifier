import React, { useState } from 'react'
import rifCredentialViewerLogo from './assets/images/rif-credential-viewer.svg'
import poweredByRif from './assets/images/powered-by-iov.svg'
import './assets/scss/_index.scss'
import { version } from '../package.json'
import { appStatus, appStateInterface, initialState } from './state'
import UserInput from './components/UserInput'
import ErrorComponent from './components/ErrorComponent'
import DecodeDisplay from './components/RawJwtDisplay'
import { handleVerifiableCredential } from './operations'
import LoadingComponent from './components/LoadingComponent'

function App () {
  const [appState, setAppState] = useState<appStateInterface>(initialState)

  const decode = (jwt: string) => {
    setAppState({ ...initialState, status: appStatus.LOADING })

    const catchError = (err: Error) => {
      console.log('error!', err)
      setAppState({ ...initialState, message: err.message, status: appStatus.ERROR })
    }

    handleVerifiableCredential(jwt)
      .then((credential: any) => {
        console.log(credential)
        // setAppState({ ...appState, jwt, credential, status: appStatus.DECODED })
      })
      .catch(catchError)

    // return null // verifyJwtThing(jwt)
    /*
    type === 'cred'
      ? handleVerifiableCredential(jwt)
        .then((credential: any) => {
          console.log(credential)
          setAppState({ ...appState, jwt, credential, status: appStatus.DECODED })
        })
        .catch(catchError)
      : handleVerifiablePresentation(jwt)
        .then((presentation: any) =>
        // setAppState({ ...appState, status: appStatus.DECODED }))
          console.log('@todo', presentation))
        .catch(catchError)
        */
  }

  return (
    <div className="App">
      <div className="container header">
        <div className="column">
          <img src={rifCredentialViewerLogo} alt="RIF Credential Viewer" />
        </div>
      </div>

      {appState.status === appStatus.ERROR && <ErrorComponent message={appState.message} />}
      {appState.status === appStatus.LOADING && <LoadingComponent />}

      <div className="container content">
        <div className="column column-6">
          <h2>Raw JWT</h2>
          <UserInput status={appState.status} handleDecode={decode} />
        </div>
        <div className="column column-6">
          <h2>Decoded</h2>
          <DecodeDisplay jwt={appState.jwt} />
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
