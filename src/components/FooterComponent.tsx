import React from 'react'
import poweredByRif from '../assets/images/powered-by-iov.svg'
import { version } from '../../package.json'
import { link } from 'fs'

const FooterComponent: React.FC = () => {
  const linkProps = {
    rel: 'noreferrer',
    target: '_blank'
  }

  return (
    <div className="container footer">
      <div className="column-4">
        <img src={poweredByRif} alt="Powered By RIF" />
        <p>Copyright &copy; 2021 IOV Labs. All rights reserved.</p>
        <p>Version {version}</p>
      </div>
      <div className="column-4">
        <h2>RIF Identity Products</h2>
        <ul>
          <li><a href="https://rsksmart.github.io/rif-identity-manager/" {...linkProps}>RIF Identity Manager</a></li>
          <li><a href="https://rsksmart.github.io/email-vc-issuer/" {...linkProps}>Email Verifiable Credential Issuer</a></li>
          <li><a href="https://developers.rsk.co/rif/identity/" {...linkProps}>RIF Identity Documentation</a></li>
        </ul>
      </div>
      <div className="column-4">
        <h2>RNS Products</h2>
        <ul>
          <li><a href="https://manager.rns.rifos.org/" {...linkProps}>RNS Domain Manager</a></li>
          <li><a href="https://developers.rsk.co/rif/rns/" {...linkProps}>RNS Documentation</a></li>
        </ul>
      </div>
    </div>
  )
}

export default FooterComponent
