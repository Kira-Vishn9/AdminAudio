import React from 'react'
import { Pagination, Stack } from '@components/index.ts'

export default function PaginationControlled ({ page, onChange }): JSX.Element {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 20 }}>
      <Stack spacing={1} >
        <Pagination count={10} page={page} onChange={onChange} />
      </Stack>
    </div>
  )
}
