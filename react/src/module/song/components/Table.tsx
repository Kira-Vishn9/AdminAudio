import React from 'react'
import { type ISong } from '@/module/song'
import Item from './Item.tsx'
import { Input, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@components/index.ts'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'

interface SongTableProps {
  songs: ISong[]
  setInputValue: React.Dispatch<React.SetStateAction<string>>
}

export const SongTable: React.FC<SongTableProps> = ({ songs, setInputValue }) => {
  const list: JSX.Element[] = songs.map((song) => <Item key={song._id} songs={song} />)

  return (
   <div style={{ width: '100%' }}>
     <div style={{ display: 'flex', justifyContent: 'end', width: '100%' }}>
       <Link to={'/newsong'} >
        <Button sx={{ border: 1 }} >ADD</Button>
       </Link>
     </div>
     <Input sx={{ marginTop: 2, marginBottom: 2 }} placeholder='Search...' onChange={(e) => { setInputValue(e.target.value) }}></Input>
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
