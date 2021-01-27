import { JWTVerified } from 'jesse-did-jwt'

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
  jwt?: string
  credential?: JWTVerified,
}

export const initialState = {
  status: appStatus.START,
  message: '',
  jwt: undefined,
  credential: undefined
}
