import React from 'react'
import { type IAlbums } from '@/module/song'
import { useForm } from 'react-hook-form'
import { Input } from '@/component/index'
import { type ISongFilled } from '@/module/song/song.model.ts'

const Song = ({ songInfo }: { songInfo: ISongFilled }): JSX.Element => {
  console.log(songInfo)
  const {
    register,
    handleSubmit
  } = useForm()

  const albums: string = (songInfo.albums).map((el: any): IAlbums => el.name).join(' ')

  return (
    <>
    {/*   help with mistake V */}
    <form onSubmit={handleSubmit((data): void => { console.log(data) })}>
      <div style={{ display: 'flex' }}>
        <label>
          Name:
        <Input {...register('name')} defaultValue={songInfo.name}></Input>
        </label>
        <label>
          Code:
          <Input {...register('code')} defaultValue={songInfo.code}></Input>
        </label><label>
        Cover src:
        <Input {...register('cover_src')}>
        </Input>
      </label>
        <img style={{ width: 80, height: 80 }} src={songInfo.cover_src} alt={'photo'}/>
      </div>
      <div style={{ display: 'flex' }}>
        <label>
          Duration:
          <Input disabled={true} {...register('duration')} defaultValue={songInfo.duration !== null ? songInfo.duration : ''}></Input>
        </label>
        <label>
          Album code:
          <Input {...register('album_code')} defaultValue={songInfo.album_code}></Input>
        </label>
        <label>
          Release date:
          <Input {...register('release_date')} defaultValue={(new Date(songInfo.release_date).toLocaleDateString())}></Input>
        </label>
      </div>
      <div style={{ display: 'flex' }}>
        <label>
          Label:
          <Input {...register('label')} defaultValue={songInfo.label}></Input>
        </label>
        <label>
          Albums:
          <Input {...register('albums')} defaultValue={albums}></Input>
        </label>
      </div>
      <input type="submit" />
    </form>
    </>
  )
}

export default Song
