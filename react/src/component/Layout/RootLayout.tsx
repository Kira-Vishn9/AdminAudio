import React from 'react'
import type { IChild } from '@/type/allType.ts'
import { ContextAuth } from '@/context/Context.tsx'
import { LayoutAuth } from '@/component/Layout/LauoutAuth.tsx'
import { LayoutDefault } from '@/component/Layout/LayoutDefault.tsx'

export const RootLayout = ({ children }: IChild): JSX.Element => {
  const { auth } = React.useContext(ContextAuth)

  return auth ? <LayoutAuth>{children}</LayoutAuth> : <LayoutDefault>{children}</LayoutDefault>
}
