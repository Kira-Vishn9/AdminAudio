import React from 'react'
import { TableCell, TableRow } from '@components/index.ts'
import { type ISong } from '@/module/song'
import { Button } from '@components/index'
import { Link } from 'react-router-dom'

interface ItemProps {
  songs: ISong
}

const Item: React.FC<ItemProps> = ({ songs }) => {
  return (
    <>
      <TableRow
        key={songs._id}
        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
      >
        <TableCell align="right">
          <img style={{ width: 60 }} src={songs.cover_src} alt={'photo_cover'} />
        </TableCell>
        <TableCell component="th" scope="row" sx={{ textAlignLast: 'left' }}>
          {songs.name}
        </TableCell>
        <TableCell align="right">{(new Date(songs.release_date).toLocaleDateString())}</TableCell>
        <TableCell align="right">
          <Link to={`/song/${songs._id}`}>
            <Button>Edit</Button>
          </Link>
        </TableCell>
      </TableRow>
    </>
  )
}

export default Item
