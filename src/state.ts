/* eslint-disable no-unused-vars */
export enum appStatus {
  START = 'START',
  LOADING = 'LOADING',
  ERROR = 'ERROR',
  DECODED = 'DECODED'
}

export interface appStateInterface {
  status: appStatus
  message: string
}

export const initialState = { status: appStatus.START, message: '' }
