import React from 'react'
import { TableCell, TableRow } from '@components/index.ts'
import { type ISong } from '@/module/song'
import { Button } from '@components/index'

interface ItemProps {
  songs: ISong
  openSong: (id: string) => void
}

const Item: React.FC<ItemProps> = ({ songs, openSong }) => {
  return (
    <>
      <TableRow
        key={songs._id}
        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
      >
        <TableCell align="right">
          <img style={{ width: 30 }} src={songs.cover_src} alt={'photo_cover'} />
        </TableCell>
        <TableCell component="th" scope="row">
          {songs.name}
        </TableCell>
        <TableCell align="right">{(new Date(songs.release_date).toLocaleDateString())}</TableCell>
        <TableCell align="right">
            <Button onClick={ () => { openSong(songs._id) }}>Add</Button>
        </TableCell>
      </TableRow>
    </>
  )
}

export default Item
