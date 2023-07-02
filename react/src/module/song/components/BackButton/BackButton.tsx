import React from 'react'
import { Button } from '@/component/index.ts'
import { useNavigate } from 'react-router-dom'

const BackButton = (): JSX.Element => {
  const navigate = useNavigate()
  const goBack = (): void => {
    navigate(-1)
  }
  return (
    <>
      <div>
        <Button onClick={goBack}>Back</Button>
      </div>
    </>
  )
}

export default BackButton
