import React from 'react'
import { type ISongFilled } from '@/module/song/song.model.ts'

interface IRoundedDivProps {
  songInfo?: ISongFilled
  addCover: (e: React.ChangeEvent<HTMLInputElement>) => void
  imgSrc: string
}
export const RoundedDiv = ({ songInfo, addCover, imgSrc }: IRoundedDivProps): JSX.Element => {
  const divStyle = {
    width: '200px',
    height: '200px',
    borderRadius: '50%',
    background: 'linear-gradient(135deg, #ff5a00, #ffcc00)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
  return (
    <>
      {imgSrc !== ''
        ? (
        <label htmlFor="imgLoader">
          <img
            style={{ width: 200, height: 200, alignSelf: 'center', borderRadius: '50%' }}
            src={imgSrc}
            alt="photo"
          />
          <input id="imgLoader" onChange={addCover} type="file" style={{ display: 'none' }} />
        </label>
          )
        : (
        <div style={divStyle}>{songInfo !== undefined ? songInfo.name.split(' ').slice(1, 2).join(' ') : 'init'}</div>
          )}
    </>
  )
}
