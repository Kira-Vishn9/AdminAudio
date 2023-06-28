import React from 'react'
import { type IAlbums } from '@/module/song'
import { useForm } from 'react-hook-form'
import { Input } from '@/component/index'
import { type ISongFilled } from '@/module/song/song.model.ts'
import { Button } from '@/component/index.ts'
import BackButton from '@/module/song/components/BackButton/BackButton.tsx'

const Song = ({ songInfo }: { songInfo: ISongFilled }): JSX.Element => {
  const hiddenInputRef = React.useRef(null)
  const [imgSrc, setImgSrc] = React.useState(songInfo.cover_src)

  const {
    register,
    handleSubmit,
    formState: { isSubmitting }
  } = useForm()

  const albums: string = songInfo.albums.map((el: any): IAlbums => el.name).join(' ')
  console.log(songInfo)
  const onSubmit = async (data): Promise<void> => {
  // something logic
    console.log(data)
  }

  const handleClick = (): void => {
    if (hiddenInputRef.current !== null) {
      hiddenInputRef.current.click()
    }
  }

  const addCover = (e: React.ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader()
    reader.readAsDataURL(e.target.files[0])
    reader.onload = () => {
      setImgSrc(reader.result)
    }
    return reader.result
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} style={{ minWidth: 700, position: 'relative' }}>
        <BackButton />
        <div style={{ display: 'flex' }}>
          <img
            style={{ width: 150, height: 150, alignSelf: 'center', marginRight: 50, borderRadius: '50%' }}
            src={imgSrc}
            alt="photo"
            onClick={handleClick}
          />
          <input onChange={addCover} ref={hiddenInputRef} type="file" style={{ display: 'none' }} />
          <div>
            <label>
              Name:
              <Input sx={{ width: 500 }} {...register('name')} defaultValue={songInfo.name} />
            </label>
            <label>
              Genres:
              <Input sx={{ width: 500 }} {...register('genres')} defaultValue={songInfo.genres.map(el => el.name).join(',')} />
            </label>
            <label>
              Artist:
              <Input sx={{ width: 500 }} {...register('artists')} defaultValue={songInfo.artists.map(el => el.name).join(',')} />
            </label>
            <label>
              Release date:
              <Input
                sx={{ width: 500 }}
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
          <Input {...register('albums')} defaultValue={albums} />
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
