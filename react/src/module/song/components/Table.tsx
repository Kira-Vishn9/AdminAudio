import React from 'react'
import { type ISong } from '@/module/song'
import Item from './Item.tsx'

export const SongTable = ({ songs }: { songs: ISong[] }): JSX.Element => {
  const list = songs.map((song) => <Item song={song} />)

  return (
   <div>
     {list}
   </div>
  )
}
