import React from 'react'
import { type IAlbums } from '@/module/song'
import { useForm } from 'react-hook-form'
import { Input } from '@/component/index'
import { type ISongFilled } from '@/module/song/song.model.ts'
import { Button } from '@/component/index.ts'
import BackButton from '@/module/song/components/BackButton/BackButton.tsx'
import { RoundedDiv } from '@/module/song/components/RoundedDiv/RoundedDiv.tsx'

const Song = ({ songInfo }: { songInfo: ISongFilled }): JSX.Element => {
  const [imgSrc, setImgSrc] = React.useState(songInfo.cover_src)

  const {
    register,
    handleSubmit
  } = useForm()
  const onSubmit = async (data): Promise<void> => {
    console.log(data)
  }
  const addCover = (e: React.ChangeEvent<HTMLInputElement>): string => {
    const reader = new FileReader()
    reader.readAsDataURL(e.target.files[0])
    reader.onload = () => {
      setImgSrc(reader.result as string)
    }
    return reader.result as string
  }
  return (
    <>
      <form onSubmit={ handleSubmit(onSubmit)} style={{ width: 100 + '%' }}>
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
              <Input sx={{ width: 100 + '%' }} {...register('name')} defaultValue={songInfo.name} />
            </label>
            <label>
              Genres:
              <Input sx={{ width: 100 + '%' }} {...register('genres')} defaultValue={songInfo.genres.map(el => el.name).join(',')} />
            </label>
            <label>
              Artist:
              <Input sx={{ width: 100 + '%' }} {...register('artists')} defaultValue={songInfo.artists.map(el => el.name).join(',')} />
            </label>
            <label>
              Release date:
              <Input
                sx={{ width: 100 + '%' }}
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
          <Input {...register('code')} defaultValue={songInfo.code} />
        </label>
        <label>
          Label:
          <Input {...register('label')} defaultValue={songInfo.label} />
        </label>
        <label>
          Albums:
          <Input {...register('albums')} defaultValue={songInfo.albums.map((el: any): IAlbums => el.name).join(' ')} />
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

export default Song
