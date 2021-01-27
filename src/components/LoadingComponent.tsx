import React from 'react'

interface LoadingComponentInterface {}

const LoadingComponent: React.FC<LoadingComponentInterface> = () =>
  <div className="panel" style={{ textAlign: 'center' }}><div className="loader"> </div></div>

export default LoadingComponent
