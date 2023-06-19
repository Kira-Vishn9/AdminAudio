import type { Dispatch, SetStateAction } from 'react'
import { createContext } from 'react'

interface IAuthContext {
  auth: string
  setAuth: Dispatch<SetStateAction<string>>
}

export const ContextAuth = createContext<IAuthContext>({ auth: 'false', setAuth: () => null })
