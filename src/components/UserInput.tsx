import React, { useState } from 'react'
import { appStatus } from '../state'

interface UserInputInterface {
  status: appStatus
  handleDecode: (jwt: string) => any // @todo type
}

const UserInput: React.FC<UserInputInterface> = ({
  status, handleDecode
}) => {
  const [jwtInput, setJwtInput] = useState<string>('')
  const sharedProps = { disabled: status === appStatus.LOADING }

  return (
    <div>
      <textarea
        {...sharedProps}
        value={jwtInput}
        onChange={(evt) => setJwtInput(evt.target.value)}
        className="userInput"
      />
      <button
        {...sharedProps}
        onClick={() => handleDecode(jwtInput)}
        className="submit"
      >Decode Presentation</button>
    </div>
  )
}

export default UserInput
