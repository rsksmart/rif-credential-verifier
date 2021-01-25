import React from 'react'
import { appStatus } from '../state'

interface LoadingComponentInterface {
  status: appStatus
}

const LoadingComponent: React.FC<LoadingComponentInterface> = ({ status }) =>
  status === appStatus.LOADING
    ? <div style={{ textAlign: 'center' }}>LOADING</div>
    : <></>

export default LoadingComponent
