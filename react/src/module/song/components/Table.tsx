import React from 'react'
import { type ISong } from '@/module/song'
import Item from './Item.tsx'
import { Input, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@components/index.ts'

interface SongTableProps {
  songs: ISong[]
  openSong: (id: string) => void
  setInputValue: React.Dispatch<React.SetStateAction<string>>
}

export const SongTable: React.FC<SongTableProps> = ({ songs, openSong, setInputValue }) => {
  const list: JSX.Element[] = songs.map((song) => <Item key={song._id} songs={song} openSong={openSong} />)

  return (
   <div>
     <Input sx={{ marginTop: 2, marginBottom: 2 }} placeholder='Search...' onChange={(e) => { setInputValue(e.target.value) }}></Input>
     <TableContainer component={Paper}>
       <Table sx={{ minWidth: 1050, textAlignLast: 'center' }} size="small" aria-label="a dense table">
         <TableHead>
           <TableRow>
             <TableCell align="right">Cover</TableCell>
             <TableCell sx={{
               textAlignLast: 'left',
               paddingLeft: 85
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
