import React from 'react'
import { Button } from '@/components/index.ts'
import BackButton from '@/components/BackButton/BackButton.tsx'
import { RoundedDiv } from '@/module/song/components/RoundedDiv/RoundedDiv.tsx'
import { useForm } from 'react-hook-form'
import { Input } from '@/components/index'
import styles from './style.module.css'

const CreateSong = (): JSX.Element => {
  const [imgSrc, setImgSrc] = React.useState('')

  const {
    register,
    handleSubmit
  } = useForm()

  const onSubmit = async (data: any): Promise<void> => {
    console.log(data)
  }

  const addCover = (e: React.ChangeEvent<HTMLInputElement>): string => {
    if ((e?.target.files != null) && e?.target.files[0]) {
      const reader = new FileReader()
      reader.readAsDataURL(e.target.files[0])
      reader.onload = () => {
        setImgSrc(reader.result as string)
      }
      return reader.result as string
    }
    return ''
  }

  return (
    <>
      <form onSubmit={ handleSubmit(onSubmit)} style={{ width: '100%' }}>
        <BackButton />
        <div className={styles.grid}>
          <RoundedDiv addCover={addCover} imgSrc={imgSrc} />
          <div>
            <label>
              Name:
              <Input sx={{ width: '100%' }} {...register('name')}/>
            </label>
            <label>
              Genres:
              <Input sx={{ width: '100%' }} {...register('genres')}/>
            </label>
            <label>
              Artist:
              <Input sx={{ width: '100%' }} {...register('artists')} />
            </label>
            <label>
              Release date:
              <Input
                sx={{ width: '100%' }}
                {...register('release_date')}
              />
            </label>
          </div>
        </div>

        <label>
          Duration:
          <Input
            disabled={false}
            {...register('duration')}
          />
        </label>
        <label>
          Album code:
          <Input {...register('album_code')}/>
        </label>
        <label>
          Code:
          <Input {...register('code')}/>
        </label>
        <label>
          Label:
          <Input {...register('label')}/>
        </label>
        <label>
          Albums:
          <Input {...register('albums')}/>
        </label>
        <div className={styles.wrapButton}>
          <Button sx={{ margin: 2, border: 1 }} type="submit" >
            Submit
          </Button>
        </div>
      </form>
    </>
  )
}
export default CreateSong
