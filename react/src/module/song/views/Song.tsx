import React from 'react'
import SinglSong from '@/module/song/components/SinglSong.tsx'
import { getSongInfo } from '@/module/song/song.service.ts'
import { useParams } from 'react-router-dom'
import { type ISongFilled } from '@/module/song/song.model.ts'

const Song = (): JSX.Element => {
  const { id } = useParams()
  const [selectedSong, setSelectedSong] = React.useState<ISongFilled | null>(null)
  console.log(id)
  React.useEffect(() => {
    getSongInfo(id)
      .then((response) => {
        setSelectedSong(response.song)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [id])

  return (
    <SinglSong songInfo={selectedSong} />
  )
}

export default Song
