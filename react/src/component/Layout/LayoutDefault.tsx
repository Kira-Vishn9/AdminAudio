import React from 'react'
import './style.css'
import { type Ichild } from '../../type/allType.ts'

export function LayoutDefault ({ children }: Ichild): JSX.Element {
  return (
    <div className="layout">
      <div className="flex-template">
        <main className="main">{children}</main>
      </div>
    </div>
  )
}
