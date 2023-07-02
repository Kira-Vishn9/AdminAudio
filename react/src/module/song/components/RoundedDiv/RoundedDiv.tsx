import React from 'react'
import { type ISongFilled } from '@/module/song/song.model.ts'

interface IRoundedDivProps {
  songInfo?: ISongFilled
  addCover: (e: React.ChangeEvent<HTMLInputElement>) => void
  imgSrc: string
}
export const RoundedDiv = ({ songInfo, addCover, imgSrc }: IRoundedDivProps): JSX.Element => {
  const divStyle = {
    width: '250px',
    height: '250px',
    borderRadius: '50%',
    background: 'linear-gradient(135deg, #ff5a00, #ffcc00)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    justifySelf: 'center'
  }
  return (
    <>
      {imgSrc !== ''
        ? (
        <label htmlFor="imgLoader" style={{ display: 'flex', justifyContent: 'center', alignSelf: 'center', cursor: 'pointer' }}>
          <img
            style={{ width: 250, height: 250, alignSelf: 'center', borderRadius: '50%' }}
            src={imgSrc}
            alt="photo"
          />
          <input id="imgLoader" onChange={addCover} type="file" style={{ display: 'none' }} />
        </label>
          )
        : (
          <label htmlFor="imgLoader" style={{ display: 'flex', justifyContent: 'center', alignSelf: 'center', cursor: 'pointer' }}>
            <div style={divStyle}>{songInfo !== undefined ? songInfo.name.split(' ').slice(1, 2).join(' ') : 'init'}</div>
            <input id="imgLoader" onChange={addCover} type="file" style={{ display: 'none' }} />
          </label>
          )}
    </>
  )
}
