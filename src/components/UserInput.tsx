import React, { useState } from 'react'

interface UserInputInterface {
  disabled: boolean
  handleDecode: (jwt: string, useEthSign: boolean) => void
  initialText?: string
}

const UserInput: React.FC<UserInputInterface> = ({
  disabled, handleDecode, initialText
}) => {
  const [jwtInput, setJwtInput] = useState<string>(initialText || '')
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
        onClick={() => handleDecode(jwtInput.trim().replace(/\n/g, ' '), useEthSign)}
        className="submit"
      >Decode JWT</button>
    </div>
  )
}

export default UserInput
