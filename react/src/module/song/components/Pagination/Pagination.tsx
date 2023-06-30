import React from 'react'
import { Pagination, Stack } from '@components/index.ts'

interface PaginationControlledProps {
  page: number
  onChange: (event: React.ChangeEvent<unknown>, value: number) => void
}
const PaginationControlled: React.FC<PaginationControlledProps> = ({ page, onChange }): JSX.Element => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginLeft: 'auto', marginRight: 'auto', marginTop: 30, marginBottom: 30 }}>
      <Stack spacing={1} >
        <Pagination count={10} page={page} onChange={onChange} />
      </Stack>
    </div>
  )
}

export default PaginationControlled
