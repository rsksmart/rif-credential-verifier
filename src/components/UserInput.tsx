import React, { useState } from 'react'

interface UserInputInterface {
  disabled: boolean
  handleDecode: (jwt: string, useEthSign: boolean) => void
}

const UserInput: React.FC<UserInputInterface> = ({
  disabled, handleDecode
}) => {
  const [jwtInput, setJwtInput] = useState<string>('')
  const [useEthSign, setUseEthSign] = useState<boolean>(true)

  const sharedProps = { disabled }

  return (
    <div>
      <textarea
        {...sharedProps}
        value={jwtInput}
        onChange={(evt) => setJwtInput(evt.target.value)}
        className="userInput"
      />
      <p><label>
        <input {...sharedProps} type="checkbox" checked={useEthSign} className="ethSignCheck" onChange={(evt) => setUseEthSign(evt.target.checked)} />
        Use ethSign
      </label></p>
      <button
        {...sharedProps}
        onClick={() => handleDecode(jwtInput, useEthSign)}
        className="submit"
      >Decode Presentation</button>
    </div>
  )
}

export default UserInput
