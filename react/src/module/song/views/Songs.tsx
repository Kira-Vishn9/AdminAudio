import React, { useEffect } from 'react'
import { getSongs, type ISong } from '@/module/song'
import { SongTable } from '@/module/song/components/Table.tsx'
import PaginationRounded from '@/module/song/components/Pagination/Pagination.tsx'
import { type SongDtoRequest } from '@/module/song/song.dto.ts'

export const Songs = () => {
  const [songs, setSongsResp] = React.useState<ISong[]>([])
  // логика загрузки песен
  // логику переключения страниц. текущая страница, функция для изменения страницы
  // xерез юз жффект загружать данные при монтировании. В депенд передать текущую страницу, чттобы запрос выполнялся при изменений стриницы
  const [page, setPage] = React.useState(1)
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    console.log(event)
    console.log(value)
    setPage(value)
  }
  // ВАЖНО

  // функция для получения данных - отдельно от таблицы
  //
  useEffect(() => {
    const params: SongDtoRequest = {
      params: {
        page
      }
    }
    getSongs(params)
      .then((res) => { setSongsResp(res.songs) })
      .catch((err) => { console.log(err) })
  }, [page])

  return (
    <>
      <SongTable songs={songs} />
      <PaginationRounded page={page} onChange={handleChange}/>
    </>
  )
}

// таблица с песнями по 25 штук
// пагинация внизу
// каждый элеент таблицы выводит
// картинка песни 50 на 50 +-
// name, artist.name, release date, edit button
