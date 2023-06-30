import React from 'react'
import { Header } from '../Header/Header'
import { Aside } from '../Aside/Aside'
import './style.css'
import { type Ichild } from '../../type/allType.ts'

export function LayoutAuth ({ children }: Ichild): JSX.Element {
  return (
    <div className="layout">
      <div className="wrap-header">
        <Header></Header>
      </div>
      <div className={'right-template'}>
        <div className="wrap-aside">
          <Aside></Aside>
        </div>
        <main className="main">{children}</main>
      </div>
    </div>
  )
}
