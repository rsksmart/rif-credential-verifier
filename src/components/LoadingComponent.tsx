import React from 'react'

interface LoadingComponentInterface {}

const LoadingComponent: React.FC<LoadingComponentInterface> = () =>
  <div className="panel" style={{ textAlign: 'center' }}>LOADING</div>

export default LoadingComponent
