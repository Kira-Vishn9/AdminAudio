import React from 'react'
import { Header } from '../Header/Header'
import { Aside } from '../Aside/Aside'
import styles from './style.module.css'
import { type IComponentChild } from '@/type/allType.ts'

export function LayoutDefault ({ children }: IComponentChild): JSX.Element {
  return (
    <div className={styles.layout}>
      <div className={styles.header} >
        <Header />
      </div>
      <div className={styles.default}>
        <div className={styles.aside}>
          <Aside />
        </div>
        <main className={styles.main}>{children}</main>
      </div>
    </div>
  )
}
