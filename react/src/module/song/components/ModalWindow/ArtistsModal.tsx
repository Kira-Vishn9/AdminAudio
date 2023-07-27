import React from 'react'
import ModalWindow from './ModalWindow.tsx'
import { type SongDtoRequest } from '@module/song/song.dto.ts'
import { type IArtists } from '@module/song/song.model.ts'
import { getArtists } from '@module/song/song.service.ts'

interface ModalWindowProps {
  payload?: {
    arrayArtists: Array<{ _id: string, name: string }>
  }
}

export const ArtistsModal = (props: ModalWindowProps): JSX.Element => {
  const [arrayArtists, setArrayArtists] = React.useState<IArtists[]>([])
  const [page, setPage] = React.useState(1)
  const handleChange = (event: React.ChangeEvent<unknown>, value: number): void => {
    setPage(value)
    console.log(event)
  }
  //
  React.useEffect(() => {
    const params: SongDtoRequest = {
      params: {
        page,
        count: 25
      }
    }
    getArtists(params)
      .then((data) => { setArrayArtists(data) })
      .catch((error) => { console.error(error) })
  }, [page])
  return (
    <>
      <ModalWindow array={arrayArtists} payload={props.payload} handleChange={handleChange} page={page}/>
    </>
  )
}
// вот тут вся логика с артистом
// page, setpage
// use effect with fetch
// search
// save selected artists
