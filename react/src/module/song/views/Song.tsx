import React from 'react'
import { useParams } from 'react-router-dom'
import SingleSong from '@module/song/components/SingleSong/SingleSong.tsx'
import { getSongInfo } from '@module/song/song.service.ts'
import { type ISongFilled } from '@module/song/song.model.ts'
import Snackbars from '@/components/SnackBar/SnackBar.tsx'

const Song = (): JSX.Element => {
  const { id } = useParams()
  const [selectedSong, setSelectedSong] = React.useState<ISongFilled | undefined>()
  const [isFetching, setIsFetching] = React.useState(true)
  const [open, setOpen] = React.useState(false)

  React.useEffect(() => {
    getSongInfo(id ?? '') // Provide a default value for id
      .then((response) => {
        setSelectedSong(response.song)
      })
      .catch(() => {
        setOpen(true)
      })
      .finally(() => {
        setIsFetching(true)
      })
  }, [id])

  return (
    <>
      {open
        ? <Snackbars />
        : (isFetching
            ? (
                (selectedSong != null)
                  ? (
                  <SingleSong songInfo={selectedSong}/>
                    )
                  : (
                  <div>No song found.</div>
                    )
              )
            : (
                'Loading...'
              )
          )}

    </>
  )
}
export default Song
