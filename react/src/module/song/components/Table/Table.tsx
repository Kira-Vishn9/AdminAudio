import React from 'react'
import { type ISong } from '@/module/song/song.model.ts'
import Item from '../Item/Item.tsx'
import { Button, Input, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@/components'
import { useNavigate } from 'react-router-dom'
import styles from './style.module.css'

interface SongTableProps {
  songs: ISong[]
  setInputValue: React.Dispatch<React.SetStateAction<string>>
}

export const SongTable: React.FC<SongTableProps> = ({ songs, setInputValue }) => {
  const list: JSX.Element[] = songs.map((song) => <Item key={song._id} songs={song} />)
  const navigate = useNavigate()
  const handleClick = (): void => {
    navigate('/newsong')
  }
  return (
   <div className={styles.wrap}>
     <div className={styles.wrapButton}>
        <Button onClick={handleClick} sx={{ border: 1 }} >ADD</Button>
     </div>
     <Input sx={{ marginTop: 2, marginBottom: 2 }} placeholder='Search...' onChange={(e) => { setInputValue(e.target.value) }} />
     <TableContainer component={Paper}>
       <Table sx={{ minWidth: 1090, textAlignLast: 'center' }} size="small" aria-label="a dense table">
         <TableHead>
           <TableRow>
             <TableCell align="right">Cover</TableCell>
             <TableCell sx={{
               textAlignLast: 'left'
             }}>Name Group</TableCell>
             <TableCell align="right">Release Date</TableCell>
             <TableCell align="right">Actions</TableCell>
           </TableRow>
         </TableHead>
         <TableBody>
           {list}
         </TableBody>
       </Table>
     </TableContainer>
   </div>
  )
}
