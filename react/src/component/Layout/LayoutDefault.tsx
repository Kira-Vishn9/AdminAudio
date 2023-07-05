import React from 'react'
import './style.css'
import { type IChild } from '../../type/allType.ts'
import { ContextAuth } from '@/context/Context.tsx'

export function LayoutDefault ({ children }: IChild): JSX.Element {
  const { auth } = React.useContext(ContextAuth)
  return (
    <div className="layout">
      <div className="flex-template">
        <main className={auth ? 'main' : 'mainFalse'}>{children}</main>
      </div>
    </div>
  )
}
