import { createContext } from 'react'
import type { Dispatch, SetStateAction } from 'react'

interface IAuthContext {
  auth: boolean
  setAuth: Dispatch<SetStateAction<boolean>>
}

export default createContext<IAuthContext>({ auth: false, setAuth: () => null })
