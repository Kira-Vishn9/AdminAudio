import React from 'react'
import { Button, TableCell, TableRow } from '@/components/index.ts'
import { type ISong } from '@/module/song/song.model.ts'
import { useNavigate } from 'react-router-dom'
import styles from './style.module.css'

interface ItemProps {
  songs: ISong
}

const Item: React.FC<ItemProps> = ({ songs }) => {
  const navigate = useNavigate()

  const handleClick = (): void => {
    navigate(`/song/${songs._id}`)
  }
  const getDate = (): string => {
    return new Date(songs.release_date).toLocaleDateString()
  }
  return (
    <>
      <TableRow
        key={songs._id}
        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
      >
        <TableCell align="right">
          <img className={styles.img} src={songs.cover_src} alt={'photo_cover'} />
        </TableCell>
        <TableCell component="th" scope="row" sx={{ textAlignLast: 'left' }}>
          {songs.name}
        </TableCell>
        <TableCell align="right">{getDate()}</TableCell>
        <TableCell align="right">
            <Button onClick={handleClick}>Edit</Button>
        </TableCell>
      </TableRow>
    </>
  )
}

export default Item
