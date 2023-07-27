import React from 'react'
import ModalWindow from './ModalWindow.tsx'
import { type SongDtoRequest } from '@module/song/song.dto.ts'
import { getGenres } from '@module/song/song.service.ts'

interface ModalWindowProps {
  payload?: {
    payloadArray: Array<{ _id: string, name: string }>
  }
}
interface Genre {
  _id: string
  name: string
}
export const GenresModal = (props: ModalWindowProps): JSX.Element => {
  const [arrayGenres, setArrayGenres] = React.useState<Genre[]>([])
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
    getGenres(params)
      .then((data) => { setArrayGenres(data.genres) })
      .catch((error) => { console.error(error) })
  }, [page])
  return (
    <>
      <ModalWindow array={arrayGenres} payload={props.payload} handleChange={handleChange} page={page}/>
    </>
  )
}
// вот тут вся логика с артистом
// page, setpage
// use effect with fetch
// search
// save selected artists
