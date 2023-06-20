import React from 'react'
import type { Ichild } from '@/type/allType.ts'
import { ContextAuth } from '@/context/Context.tsx'

import { LayoutAuth } from '@/component/Layout/LautAuth.tsx'
import { LayoutDefault } from '@/component/Layout/LayoutDefault.tsx'

export const RootLayout = ({ children }: Ichild): JSX.Element => {
  const { auth } = React.useContext(ContextAuth)

  return auth === 'true' ? <LayoutAuth>{children}</LayoutAuth> : <LayoutDefault>{children}</LayoutDefault>
}
