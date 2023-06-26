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
     <Input placeholder='Search...' onChange={(e) => { setInputValue(e.target.value) }}></Input>
     <TableContainer component={Paper}>
       <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
         <TableHead>
           <TableRow>
             <TableCell align="right">Cover</TableCell>
             <TableCell>Name Group</TableCell>
             <TableCell align="right">Release Date</TableCell>
             <TableCell align="right">Setting</TableCell>
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
