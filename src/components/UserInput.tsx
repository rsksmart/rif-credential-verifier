import React, { useState } from 'react'
import { appStatus } from '../state'

interface UserInputInterface {
  status: appStatus
  handleDecode: (jwt: string) => void
}

const UserInput: React.FC<UserInputInterface> = ({
  status, handleDecode
}) => {
  const sampleJwt = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJFUzI1NksifQ.eyJ2YyI6eyJAY29udGV4dCI6WyJodHRwczovL3d3dy53My5vcmcvMjAxOC9jcmVkZW50aWFscy92MSJdLCJ0eXBlIjpbIlZlcmlmaWFibGVDcmVkZW50aWFsIiwiRW1haWwiXSwiY3JlZGVudGlhbFNjaGVtYSI6eyJpZCI6ImRpZDpldGhyOnJzazoweDhhMzJkYTYyNGRkOWZhZDhiZjRmMzJkOTQ1NmYzNzRiNjBkOWFkMjg7aWQ9MWViMmFmNmItMGRlZS02MDkwLWNiNTUtMGVkMDkzZjliMDI2O3ZlcnNpb249MS4wIiwidHlwZSI6Ikpzb25TY2hlbWFWYWxpZGF0b3IyMDE4In0sImNyZWRlbnRpYWxTdWJqZWN0Ijp7ImVtYWlsQWRkcmVzcyI6Implc3NlQGlvdmxhYnMub3JnIn19LCJzdWIiOiJkaWQ6ZXRocjpyc2s6dGVzdG5ldDoweDNkZDAzZDdkNmMzMTM3ZjFlYjc1ODJiYTU5NTdiOGEyZTI2ZjMwNGEiLCJuYmYiOjE2MDgyMjExNDAsImlzcyI6ImRpZDpldGhyOnJzazoweEZjYzdlNjkxYjNiNjMxODI5Qzk2NDkwNTY5YWE1RjFFMzFlRkFmOGYifQ.omtFUQRGazaMBMkmzHX_X5WaU0qu_fRD8eux_E7nDjrxGXtAKxm-vZioHJdvd7BFF1oQuvzSue7aSVxf5osSIg'
  const [jwtInput, setJwtInput] = useState<string>(sampleJwt)
  const sharedProps = { disabled: status === appStatus.LOADING }

  return (
    <div>
      <textarea
        {...sharedProps}
        value={jwtInput}
        onChange={(evt) => setJwtInput(evt.target.value)}
      />
      <button
        {...sharedProps}
        onClick={() => handleDecode(jwtInput)}
      >Decode JWT</button>
    </div>
  )
}

export default UserInput
