import React from 'react'
import SingleSong from '@/module/song/components/SingleSong.tsx'
import { getSongInfo } from '@/module/song/song.service.ts'
import { useParams } from 'react-router-dom'
import { type ISongFilled } from '@/module/song/song.model.ts'

const Song = (): JSX.Element => {
  const { id } = useParams()
  const [selectedSong, setSelectedSong] = React.useState<ISongFilled | undefined>()
  const [isLoad, setIsLoad] = React.useState(true)

  React.useEffect(() => {
    setIsLoad(false)

    getSongInfo(id ?? '') // Provide a default value for id
      .then((response) => {
        setSelectedSong(response.song)
      })
      .catch((error) => {
        console.log(error)
      })
      .finally(() => {
        setIsLoad(true)
      })
  }, [id])

  return (
    <>
      {isLoad
        ? (
            (selectedSong != null)
              ? (
          <SingleSong songInfo={selectedSong} />
                )
              : (
          <div>No song found.</div>
                )
          )
        : (
            'loading'
          )}
    </>
  )
}

export default Song
