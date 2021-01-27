import { JWTPayload } from 'jesse-did-jwt'
import React from 'react'

/**
 * Single MetaDataRow with formatting for datetime strings
 * @param label string label to display
 * @param value number datetime represented in seconds since 1970
 * @param className string, optional className for the row
 */
export const FormatDateTimeItem:React.FC<{ label: string; value?: number | null }> = ({ label, value }) =>
  value
    ? <FormatMetaData className="datetime" label={label} value={new Date(value * 1000).toLocaleString()} />
    : <></>

/**
 * Single MetaDataRow
 * @param label string label to display
 * @param value string value to display
 * @param className string, optional className for the row
 */
export const FormatMetaData:React.FC<{ label: string; value?: string; className?: string }> = ({ label, value, className }) =>
  value ? (
    <div className={`container ${className && className}`}>
      <div className="column-3 label"><p>{label}</p></div>
      <div className="column-9"><p>{value}</p></div>
    </div>
  ) : <></>

export const FormatDates:React.FC<{ payload: JWTPayload }> = ({ payload }) => (
  <>
    <FormatDateTimeItem label="Issued At" value={payload?.iat || null} />
    <FormatDateTimeItem label="Expires" value={payload.vp?.exp || null} />
    <FormatDateTimeItem label="Not Valid Before" value={payload?.nbf || null} />
  </>
)
