import { JWTPayload } from 'jesse-did-jwt'
import React from 'react'

interface FormatDateTimeI {
  label: string;
  value?: number | null,
  validation?: 'PAST' | 'FUTURE'
}
/**
 * Single MetaDataRow with formatting for datetime strings
 * @param label string label to display
 * @param value number datetime represented in seconds since 1970
 * @param validation? PAST | FUTURE Check if the date should be before or after now()
 */
export const FormatDateTimeItem:React.FC<FormatDateTimeI> = ({ label, value, validation }) => {
  if (!value) { return <></> }

  const valueDate = new Date(value * 1000)
  const valueString = valueDate.toLocaleString()

  let className = 'datetime'
  if ((validation === 'PAST' && valueDate < new Date()) || (validation === 'FUTURE' && valueDate > new Date())) {
    className += ' invalid'
  }

  return <FormatMetaData className={className} label={label} value={valueString} />
}

/**
 * Single MetaDataRow
 * @param label string label to display
 * @param value string value to display
 * @param className string, optional className for the row
 */
export const FormatMetaData:React.FC<{ label: string; value?: string; className?: string }> = ({ label, value, className }) =>
  value ? (
    <div className={className ? `container ${className}` : 'container'}>
      <div className="column-3 label"><p>{label}</p></div>
      <div className="column-9 value"><p>{value}</p></div>
    </div>
  ) : <></>

/**
 * Format multiple dates
 * @param payload payload from a JWTCredential or Presentation
 */
export const FormatDates:React.FC<{ payload: JWTPayload }> = ({ payload }) => (
  <>
    <FormatDateTimeItem label="Issued At" value={payload?.iat || null} />
    <FormatDateTimeItem label="Expires" value={payload.vp?.exp || payload.vc?.exp || null} validation="PAST" />
    <FormatDateTimeItem label="Not Valid Before" value={payload?.nbf || null} validation="FUTURE" />
  </>
)
