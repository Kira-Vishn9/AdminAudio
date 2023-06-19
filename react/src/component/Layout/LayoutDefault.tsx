import React from 'react'
import { Header } from '../Header/Header'
import { ContextAuth } from '../../context/Context.tsx'
import './style.css'
import { type Ichild } from '../../type/allType.ts'

export function LayoutDefault ({ children }: Ichild): JSX.Element {
  const { auth } = React.useContext(ContextAuth)
  return (
    <div className="layout">
      <div className="wrap-header">
        <Header></Header>
      </div>
      <div className={auth ? 'right-template' : 'flex-template'}>
        <main className="main">{children}</main>
      </div>
    </div>
  )
}
