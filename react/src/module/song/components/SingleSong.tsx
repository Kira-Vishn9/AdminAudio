import React from 'react'
import BackButton from '@/module/song/components/BackButton/BackButton.tsx'
import { RoundedDiv } from '@/module/song/components/RoundedDiv/RoundedDiv.tsx'
import { Button, Input } from '@/component'
import { type IAlbums } from '@/module/song'
import { type ISongFilled } from '@/module/song/song.model.ts'
import { useForm } from 'react-hook-form'

const SingleSong = ({ songInfo }: { songInfo: ISongFilled }): JSX.Element => {
  const {
    register,
    handleSubmit
  } = useForm()
  const [imgSrc, setImgSrc] = React.useState(songInfo.cover_src)

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

  const onSubmit = async (data: any): Promise<void> => {
    console.log(data)
  }

  return (

    <>
      <form onSubmit={ handleSubmit(onSubmit)} style={{ width: '100%' }}>
        <BackButton />
        <div style={
          {
            display: 'grid',
            gridTemplateColumns: '1fr 4fr'
          }
        }>
          <RoundedDiv songInfo={songInfo} addCover={addCover} imgSrc={imgSrc} />
          <div>
            <label>
              Name:
              <Input sx={{ width: '100%' }} {...register('name')} defaultValue={songInfo.name} />
            </label>
            <label>
              Genres:
              <Input sx={{ width: '100%' }} {...register('genres')} disabled={true} defaultValue={songInfo.genres.map(el => el.name).join(',')} />
            </label>
            <label>
              Artist:
              <Input sx={{ width: '100%' }} {...register('artists')} disabled={true} defaultValue={songInfo.artists.map(el => el.name).join(',')} />
            </label>
            <label>
              Release date:
              <Input
                sx={{ width: '100%' }}
                {...register('release_date')}
                defaultValue={new Date(songInfo.release_date).toLocaleDateString()}
              />
            </label>
          </div>
        </div>

        <label>
          Duration:
          <Input
            disabled={true}
            {...register('duration')}
            defaultValue={songInfo.duration !== null ? songInfo.duration : ''}
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
          <Input disabled={true} {...register('albums')} defaultValue={songInfo.albums.map((el: any): IAlbums => el.name).join(' ')} />
        </label>
        <div style={{ textAlign: 'center' }}>
          <Button sx={{ margin: 2, border: 1 }} type="submit" >
            Submit
          </Button>
        </div>
      </form>
    </>
  )
}

export default SingleSong
