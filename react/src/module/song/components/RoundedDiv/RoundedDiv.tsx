import React from 'react'
import { type ISongFilled } from '@module/song/song.model.ts'
import styles from './style.module.css'

interface IRoundedDivProps {
  songInfo?: ISongFilled
  addCover: (e: React.ChangeEvent<HTMLInputElement>) => void
  imgSrc: string
}
const RoundedDiv = ({ songInfo, addCover, imgSrc }: IRoundedDivProps): JSX.Element => {
  const getName = (): string => {
    return songInfo !== undefined ? songInfo.name.split(' ').slice(1, 2).join(' ') : 'init'
  }
  return (
    <>
      {imgSrc !== ''
        ? (
        <label htmlFor="imgLoader" className={styles.label}>
          <img
            className={styles.circleInit}
            src={imgSrc}
            alt="photo"
          />
          <input id="imgLoader" onChange={addCover} type="file" className={styles.input} />
        </label>
          )
        : (
          <label htmlFor="imgLoader" className={styles.label}>
            <div className={styles.circle}>{getName()}</div>
            <input id="imgLoader" onChange={addCover} type="file" className={styles.input} />
          </label>
          )}
    </>
  )
}

export default RoundedDiv
