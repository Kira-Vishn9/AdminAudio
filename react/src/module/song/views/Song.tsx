import React from 'react'
import { useParams } from 'react-router-dom'
import SingleSong from '@/module/song/components/SingleSong.tsx'
import { getSongInfo } from '@/module/song/song.service.ts'
import { type ISongFilled } from '@/module/song/song.model.ts'

const Song = (): JSX.Element => {
  const { id } = useParams()
  const [selectedSong, setSelectedSong] = React.useState<ISongFilled | undefined>()
  const [isLoading, setIsLoading] = React.useState(true)

  React.useEffect(() => {
    getSongInfo(id ?? '') // Provide a default value for id
      .then((response) => {
        setSelectedSong(response.song)
      })
      .catch((error) => {
        console.log(error)
      })
      .finally(() => {
        setIsLoading(true)
      })
  }, [id])

  return (
    <>
      {isLoading
        ? (
            'Loading...'
          )
        : (
            (selectedSong != null)
              ? (
          <SingleSong songInfo={selectedSong}/>
                )
              : (
          <div>No song found.</div>
                )
          )}
    </>
  )
}
export default Song
