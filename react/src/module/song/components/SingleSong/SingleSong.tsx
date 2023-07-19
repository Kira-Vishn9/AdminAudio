import React from 'react'
import BackButton from '@/components/BackButton/BackButton.tsx'
import { RoundedDiv } from '@/module/song/components/RoundedDiv/RoundedDiv.tsx'
import { Button, Input } from '@/components'
import { type IAlbums, type ISongFilled } from '@/module/song/song.model.ts'
import { useForm } from 'react-hook-form'
import styles from './style.module.css'
import ModalWindow from '@/module/song/components/ModalWindow/ModalWindow.tsx'
import { getArtists } from '@/module/song/song.service.ts'
import { type SongDtoRequest } from '@/module/song/song.dto.ts'

const SingleSong = ({ songInfo }: { songInfo: ISongFilled }): JSX.Element => {
  const {
    register,
    handleSubmit
  } = useForm()
  const [imgSrc, setImgSrc] = React.useState(songInfo.cover_src)
  const [open, setOpen] = React.useState(false)
  const [arrayArtists, setArrayArtists] = React.useState({})
  const [page, setPage] = React.useState(1)
  const handleOpen = (): void => { setOpen(true) }
  const handleClose = (): void => { setOpen(false) }
  const handleChange = (event: React.ChangeEvent<unknown>, value: number): void => {
    setPage(value)
    console.log(event)
  }
  const addCover = (e: React.ChangeEvent<HTMLInputElement>): string => {
    if ((e.target.files != null) && e.target.files[0]) {
      const reader = new FileReader()
      reader.readAsDataURL(e.target.files[0])
      reader.onload = () => {
        setImgSrc(reader.result as string)
      }
      return reader.result as string
    }
    return ''
  }

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

  console.log(arrayArtists)
  const onSubmit = async (data: any): Promise<void> => {
    console.log(data)
  }
  const getGengerName = (): string => {
    return songInfo.genres.map(el => el.name).join(',')
  }
  const getArtistsName = (): string => {
    return songInfo.artists.map(el => el.name).join(',')
  }
  const getReleaseDate = (): string => {
    return new Date(songInfo.release_date).toLocaleDateString()
  }
  const getDuration = (): number => {
    return songInfo.duration !== null ? songInfo.duration : 0
  }
  const getAlbumsName = (): string => {
    return songInfo.albums.map((el: any): IAlbums => el.name).join(' ')
  }

  return (
    <>
      {open
        ? <ModalWindow handleChange={handleChange} page={page} arrayArtists={arrayArtists} data={songInfo.artists} handleClose={handleClose} open={open} />
        : ''}
      <form onSubmit={ handleSubmit(onSubmit)} style={{ width: '100%' }}>
        <BackButton />
        <div className={styles.grid}>
          <RoundedDiv songInfo={songInfo} addCover={addCover} imgSrc={imgSrc} />
          <div>
            <label>
              Name:
              <Input sx={{ width: '100%' }} {...register('name')} defaultValue={songInfo.name} />
            </label>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
            <label>Genres:</label>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'end' }}>
              <Input sx={{ width: '100%' }} {...register('genres')} disabled={true} defaultValue={getGengerName()} />
              <Button sx={{ border: 1, padding: 0, position: 'absolute' }} onClick={handleOpen}>ТЫК</Button>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <label style={{ alignSelf: 'flex-start' }}>Artist:</label>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'end' }}>
                <Input sx={{ width: '100%' }} {...register('artists')} disabled={true} defaultValue={getArtistsName()} />
                <Button sx={{ border: 1, padding: 0, position: 'absolute' }} onClick={handleOpen}>ТЫК</Button>
              </div>
            </div>
            <label>
              Release date:
              <Input
                sx={{ width: '100%' }}
                {...register('release_date')}
                defaultValue={getReleaseDate()}
              />
            </label>
          </div>
        </div>

        <label>
          Duration:
          <Input
            disabled={true}
            {...register('duration')}
            defaultValue={getDuration()}
          />
        </label>
        <label>
          Album code:
          <Input {...register('album_code')} defaultValue={songInfo.album_code} />
        </label>
        <label>
          Code:
          <Input disabled={true} {...register('code')} defaultValue={songInfo.code} />
        </label>
        <label>
          Label:
          <Input {...register('label')} defaultValue={songInfo.label} />
        </label>
        <label>
          Albums:
          <Input disabled={true} {...register('albums')} defaultValue={getAlbumsName()} />
        </label>
        <div className={styles.wrapButton} >
          <Button sx={{ margin: 2, border: 1 }} type="submit" >
            Submit
          </Button>
        </div>
      </form>
    </>
  )
}

export default SingleSong
