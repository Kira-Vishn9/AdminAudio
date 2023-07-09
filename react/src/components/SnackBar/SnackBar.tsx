import * as React from 'react'
import { type AlertProps, MuiAlert, Stack } from '@/components/index.ts'

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert (
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
})
const Snackbars = (): JSX.Element => {
  return (
    <Stack spacing={2} sx={{
      top: 0,
      position: 'absolute',
      zIndex: 20,
      right: 0,
      margin: 2
    }}>
      <Alert severity="error">This is an error message!</Alert>
    </Stack>
  )
}

export default Snackbars
