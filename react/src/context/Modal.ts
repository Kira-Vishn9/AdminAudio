import type { Dispatch, SetStateAction } from 'react'
import { createContext } from 'react'

// TODO: delete | string
type TModalNames = 'edit' | '' | string
interface IModalContext {
  modal: TModalNames
  payload: any
  show: (name: string, payload: any) => void
  close: Dispatch<SetStateAction<void>>
}

export const ModalContext = createContext<IModalContext>({
  modal: '',
  payload: null,
  show: () => null,
  close: () => null
})
