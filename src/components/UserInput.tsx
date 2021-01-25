import React, { useState } from 'react'
import { appStatus } from '../state'

interface UserInputInterface {
  status: appStatus
  handleDecode: (jwt: string, type: string) => any // @todo type
}

const UserInput: React.FC<UserInputInterface> = ({
  status, handleDecode
}) => {
  const samplePresentationJwt = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJFUzI1NksifQ.eyJ2cCI6eyJAY29udGV4dCI6WyJodHRwczovL3d3dy53My5vcmcvMjAxOC9jcmVkZW50aWFscy92MSJdLCJ0eXBlIjpbIlZlcmlmaWFibGVQcmVzZW50YXRpb24iXSwidmVyaWZpYWJsZUNyZWRlbnRpYWwiOlsiZXlKMGVYQWlPaUpLVjFRaUxDSmhiR2NpT2lKRlV6STFOa3NpZlEuZXlKMll5STZleUpBWTI5dWRHVjRkQ0k2V3lKb2RIUndjem92TDNkM2R5NTNNeTV2Y21jdk1qQXhPQzlqY21Wa1pXNTBhV0ZzY3k5Mk1TSmRMQ0owZVhCbElqcGJJbFpsY21sbWFXRmliR1ZEY21Wa1pXNTBhV0ZzSWl3aVJXMWhhV3dpWFN3aVkzSmxaR1Z1ZEdsaGJGTmphR1Z0WVNJNmV5SnBaQ0k2SW1ScFpEcGxkR2h5T25KemF6b3dlRGhoTXpKa1lUWXlOR1JrT1daaFpEaGlaalJtTXpKa09UUTFObVl6TnpSaU5qQmtPV0ZrTWpnN2FXUTlNV1ZpTW1GbU5tSXRNR1JsWlMwMk1Ea3dMV05pTlRVdE1HVmtNRGt6WmpsaU1ESTJPM1psY25OcGIyNDlNUzR3SWl3aWRIbHdaU0k2SWtwemIyNVRZMmhsYldGV1lXeHBaR0YwYjNJeU1ERTRJbjBzSW1OeVpXUmxiblJwWVd4VGRXSnFaV04wSWpwN0ltVnRZV2xzUVdSa2NtVnpjeUk2SW1wbGMzTmxRR2x2ZG14aFluTXViM0puSW4xOUxDSnpkV0lpT2lKa2FXUTZaWFJvY2pweWMyczZkR1Z6ZEc1bGREb3dlRE5rWkRBelpEZGtObU16TVRNM1pqRmxZamMxT0RKaVlUVTVOVGRpT0dFeVpUSTJaak13TkdFaUxDSnVZbVlpT2pFMk1EZ3lNakV4TkRBc0ltbHpjeUk2SW1ScFpEcGxkR2h5T25KemF6b3dlRVpqWXpkbE5qa3hZak5pTmpNeE9ESTVRemsyTkRrd05UWTVZV0UxUmpGRk16RmxSa0ZtT0dZaWZRLm9tdEZVUVJHYXphTUJNa216SFhfWDVXYVUwcXVfZlJEOGV1eF9FN25EanJ4R1h0QUt4bS12WmlvSEpkdmQ3QkZGMW9RdXZ6U3VlN2FTVnhmNW9zU0lnIl0sIm5iZiI6MTYxMTMxNzY5MSwiZXhwIjoxNjExMzIxMjkxfSwiaXNzIjoiZGlkOmV0aHI6cnNrOnRlc3RuZXQ6MHgzZGQwM2Q3ZDZjMzEzN2YxZWI3NTgyYmE1OTU3YjhhMmUyNmYzMDRhIn0.0x77954c207ca44d40104f4596c4e7c2ec8b49e044ad058609d63b6dfec6045c6d0e5ec60d99e527c48a45646f8305ce2181914ed955b2baa8103b347a244abd361b'

  // Both of these are valid JWTs from the
  const fromTests1 = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJFUzI1NkstUiJ9.eyJpYXQiOjE1NjY5MjMyNjksInN1YiI6ImRpZDpldGhyOjB4NDM1ZGYzZWRhNTcxNTRjZjhjZjc5MjYwNzk4ODFmMjkxMmY1NGRiNCIsIm5iZiI6MTU2Mjk1MDI4MiwidmMiOnsiQGNvbnRleHQiOlsiaHR0cHM6Ly93d3cudzMub3JnLzIwMTgvY3JlZGVudGlhbHMvdjEiLCJodHRwczovL3d3dy53My5vcmcvMjAxOC9jcmVkZW50aWFscy9leGFtcGxlcy92MSJdLCJ0eXBlIjpbIlZlcmlmaWFibGVDcmVkZW50aWFsIiwiVW5pdmVyc2l0eURlZ3JlZUNyZWRlbnRpYWwiXSwiY3JlZGVudGlhbFN1YmplY3QiOnsiZGVncmVlIjp7InR5cGUiOiJCYWNoZWxvckRlZ3JlZSIsIm5hbWUiOiJCYWNjYWxhdXLDqWF0IGVuIG11c2lxdWVzIG51bcOpcmlxdWVzIn19fSwiaXNzIjoiZGlkOmV0aHI6MHhmMTIzMmY4NDBmM2FkN2QyM2ZjZGFhODRkNmM2NmRhYzI0ZWZiMTk4In0.rFRZUCw3Gu0E_I5ZJbrbpuHV1JNAwpXaiFZuJ59iJ-TNqufr4cuGCBEECFbgQF-lpNm51cqSx3Y2IdWaUpatJQA'
  const fromTests2 = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJFUzI1NkstUiJ9.eyJpYXQiOjE1NjY5MjMyNjksInN1YiI6ImRpZDpldGhyOjB4NDM1ZGYzZWRhNTcxNTRjZjhjZjc5MjYwNzk4ODFmMjkxMmY1NGRiNCIsIm5iZiI6MTU2Mjk1MDI4MiwidmMiOnsiQGNvbnRleHQiOlsiaHR0cHM6Ly93d3cudzMub3JnLzIwMTgvY3JlZGVudGlhbHMvdjEiLCJodHRwczovL3d3dy53My5vcmcvMjAxOC9jcmVkZW50aWFscy9leGFtcGxlcy92MSJdLCJ0eXBlIjpbIlZlcmlmaWFibGVDcmVkZW50aWFsIiwiVW5pdmVyc2l0eURlZ3JlZUNyZWRlbnRpYWwiXSwiY3JlZGVudGlhbFN1YmplY3QiOnsiZGVncmVlIjp7InR5cGUiOiJCYWNoZWxvckRlZ3JlZSIsIm5hbWUiOiJCYWNjYWxhdXLDqWF0IGVuIG11c2lxdWVzIG51bcOpcmlxdWVzIn19fSwiaXNzIjoiZGlkOmV0aHI6MHhmMTIzMmY4NDBmM2FkN2QyM2ZjZGFhODRkNmM2NmRhYzI0ZWZiMTk4In0.rFRZUCw3Gu0E_I5ZJbrbpuHV1JNAwpXaiFZuJ59iJ-TNqufr4cuGCBEECFbgQF-lpNm51cqSx3Y2IdWaUpatJQA'
  const sampleCredentialJwt = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJFUzI1NksifQ.eyJ2YyI6eyJAY29udGV4dCI6WyJodHRwczovL3d3dy53My5vcmcvMjAxOC9jcmVkZW50aWFscy92MSJdLCJ0eXBlIjpbIlZlcmlmaWFibGVDcmVkZW50aWFsIiwiRW1haWwiXSwiY3JlZGVudGlhbFNjaGVtYSI6eyJpZCI6ImRpZDpldGhyOnJzazoweDhhMzJkYTYyNGRkOWZhZDhiZjRmMzJkOTQ1NmYzNzRiNjBkOWFkMjg7aWQ9MWViMmFmNmItMGRlZS02MDkwLWNiNTUtMGVkMDkzZjliMDI2O3ZlcnNpb249MS4wIiwidHlwZSI6Ikpzb25TY2hlbWFWYWxpZGF0b3IyMDE4In0sImNyZWRlbnRpYWxTdWJqZWN0Ijp7ImVtYWlsQWRkcmVzcyI6Implc3NlQGlvdmxhYnMub3JnIn19LCJzdWIiOiJkaWQ6ZXRocjpyc2s6dGVzdG5ldDoweDNkZDAzZDdkNmMzMTM3ZjFlYjc1ODJiYTU5NTdiOGEyZTI2ZjMwNGEiLCJuYmYiOjE2MDgyMjExNDAsImlzcyI6ImRpZDpldGhyOnJzazoweEZjYzdlNjkxYjNiNjMxODI5Qzk2NDkwNTY5YWE1RjFFMzFlRkFmOGYifQ.omtFUQRGazaMBMkmzHX_X5WaU0qu_fRD8eux_E7nDjrxGXtAKxm-vZioHJdvd7BFF1oQuvzSue7aSVxf5osSIg'

  const [jwtInput, setJwtInput] = useState<string>(sampleCredentialJwt)
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
        disabled={true}
        onClick={() => handleDecode(jwtInput, 'pres')}
      >Decode Presentation</button>
      <button
        {...sharedProps}
        onClick={() => handleDecode(jwtInput, 'cred')}
      >Decode Credential</button>

      <hr />

      <button onClick={() => setJwtInput(samplePresentationJwt)} disabled={true}>set PRESENTATION</button>
      <button onClick={() => setJwtInput(sampleCredentialJwt)}>set CREDENTIAL</button>
    </div>
  )
}

export default UserInput
