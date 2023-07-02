import React from 'react'
import './style.css'
import { type Ichild } from '../../type/allType.ts'
import { ContextAuth } from '@/context/Context.tsx'

export function LayoutDefault ({ children }: Ichild): JSX.Element {
  const { auth } = React.useContext(ContextAuth)
  return (
    <div className="layout">
      <div className="flex-template">
        <main className={auth ? 'main' : 'mainFalse'}>{children}</main>
      </div>
    </div>
  )
}
