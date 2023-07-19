import  ModalWindow  from './ModalWindow.tsx'
import React from 'react'

interface ModalWindowProps {
  payload?: {
    arrayArtists: Array<{ _id: string, name: string }>
  }
}

export const ArtistsModal = (props: ModalWindowProps) => {
  const [isValid, setIsValid] = React.useState<boolean>(false)

// вот тут вся логика с артистом
    // page, setpage
  // use effect with fetch
  // search
  // save selected artists




  return (
    <ModalWindow>

      </ModalWindow>
  )
}
