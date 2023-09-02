import React from 'react'
import styles from './style.module.css'
import { type IComponentChild } from '@type/allType.ts'
import { ContextAuth } from '@context/authContext.ts'

export function LayoutAuth ({ children }: IComponentChild): JSX.Element {
  const { auth } = React.useContext(ContextAuth)
  return (
    <div className={styles.layout}>
      <div className={styles.flex}>
        <main className={auth ? styles.main : styles.mainFalse}>{children}</main>
      </div>
    </div>
  )
}
