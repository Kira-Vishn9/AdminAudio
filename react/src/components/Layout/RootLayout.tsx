import React from 'react'
import type { IComponentChild } from '@type/allType.ts'
import { ContextAuth } from '@context/authContext.ts'
import { LayoutAuth } from '@/components/Layout/LayoutAuth.tsx'
import { LayoutDefault } from '@/components/Layout/LayoutDefault.tsx'

export const RootLayout = ({ children }: IComponentChild): JSX.Element => {
  const { auth } = React.useContext(ContextAuth)

  return auth ? <LayoutDefault>{children}</LayoutDefault> : <LayoutAuth>{children}</LayoutAuth>
}
