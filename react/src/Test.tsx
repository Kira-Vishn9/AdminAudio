import React from 'react'
import { useParams } from 'react-router-dom'

export const Test = (): JSX.Element => {
  const params = useParams()

  return (
    <>
      {JSON.stringify(params)}
    </>
  )
}
