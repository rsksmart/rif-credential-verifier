import React, { useEffect, useState } from 'react'
import rifCredentialViewerLogo from './assets/images/rif-credential-viewer.svg'
import './assets/scss/_index.scss'
import { appStatus, appStateInterface, initialState } from './state'
import UserInput from './components/UserInput'
import ErrorComponent from './components/ErrorComponent'
import { verifyVerifiableJwt } from './operations'
import LoadingComponent from './components/LoadingComponent'
import PresentationDisplay from './components/PresentationDisplay'
import { INVALID_SIGNATURE } from './constants'
import CredentialDisplay from './components/CredentialDisplay'
import { JWTVerified } from 'jesse-did-jwt'
import FooterComponent from './components/FooterComponent'

function App () {
  const [appState, setAppState] = useState<appStateInterface>(initialState)

  const decode = (jwt: string, useEthSign: boolean) => {
    setAppState({ ...initialState, status: appStatus.LOADING })

    verifyVerifiableJwt(jwt, useEthSign)
      .then((credential: JWTVerified) =>
        setAppState({ ...appState, jwt, credential, status: appStatus.DECODED }))
      .catch((err: Error) => {
        const errorMessage = err.message === INVALID_SIGNATURE ? `${err.message}, try toggling 'Use ethSign'.` : err.message
        setAppState({ ...initialState, message: errorMessage, status: appStatus.ERROR })
      })
  }

  const initialJwt = window.location.search.startsWith('?jwt=') ? window.location.search.replace('?jwt=', '') : ''
  useEffect(() => {
    if (initialJwt !== '') {
      decode(initialJwt, true)
    }
  }, [window.location.search])

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
          <UserInput
            disabled={appState.status === appStatus.LOADING}
            handleDecode={decode}
            initialText={initialJwt}
          />
        </div>
        <div className="column column-6">
          <h2>Decoded</h2>
          {appState.credential && appState.credential.payload.vp &&
            <PresentationDisplay presentation={appState.credential} verifyVerifiableJwt={verifyVerifiableJwt} />}
          {appState.credential && appState.credential.payload.vc &&
            <CredentialDisplay credential={appState.credential} verifyVerifiableJwt={verifyVerifiableJwt} jwt={appState.jwt} />}
          {appState.status === appStatus.ERROR && (
            <div className="panel">
              <ErrorComponent message={appState.message} />
            </div>
          )}
          {appState.status === appStatus.LOADING && <LoadingComponent />}
        </div>
      </div>

      <FooterComponent />
    </div>
  )
}

export default App
