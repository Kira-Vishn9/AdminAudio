import React from 'react'
import { Header } from '../Header/Header'
import { Aside } from '../Aside/Aside'
import './style.css'
import { type Ichild } from '../../type/allType.ts'
import { ContextAuth } from '../../context/Context.tsx'

export function LayoutAuth ({ children }: Ichild): JSX.Element {
  const { auth } = React.useContext(ContextAuth)
  return (
    <div className="layout">
      <div className="wrap-header">
        <Header></Header>
      </div>
      <div className={auth ? 'right-template' : 'flex-template'}>
        <div className="wrap-aside">
          <Aside></Aside>
        </div>
        <main className="main">{children}</main>
      </div>
    </div>
  )
}
