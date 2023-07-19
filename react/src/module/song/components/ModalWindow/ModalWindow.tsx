import React, { type ChangeEvent } from 'react'
import {
  Box,
  Button,
  Chip,
  ChipDelete,
  Input,
  Modal,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow
} from '@/components'
import styles from './style.module.css'
import { PaginationControlled } from '@/module/song/dependencies.ts'

interface ModalWindowProps {
  handleChange: (event: ChangeEvent<unknown>, value: number) => void
  page: number
  arrayArtists: Array<{ _id: string, name: string }>
  data: Array<{ name: string }>
  handleClose: () => void
  open: boolean
}
export default function ModalWindow ({ handleChange, page, arrayArtists, data, handleClose, open }: ModalWindowProps): JSX.Element {
  const [selected, setSelected] = React.useState<string[]>([])

  const handleDelete = (itemName: string): void => {
    setSelected((prevItems) => prevItems.filter((item) => item !== itemName))
  }
  const handleAdd = (itemName: string): void => {
    if (selected.includes(itemName)) return
    setSelected((prevItems) => [...prevItems, itemName])
  }

  React.useEffect((): void => {
    const names = data.map((item) => item.name)
    setSelected(names)
  }, [])

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            minWidth: 900,
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            border: '2px solid #000',
            boxShadow: 24,
            p: 4
          }}
        >
          <Input sx={{ marginTop: 2, marginBottom: 2 }} placeholder="Search..." />
          {selected.map((name) => (
            <Chip
              sx={{ margin: 2 }}
              endDecorator={<ChipDelete onDelete={() => { handleDelete(name) }} />}
              key={name}
            >
              {name}
            </Chip>
          ))}
          <Box sx={{ maxHeight: '400px', overflowY: 'auto' }}>
            <TableContainer component={Paper}>
              <div className={styles.title}>Artists</div>
              <div className={styles.titleRow}>Name</div>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableBody>
                  {arrayArtists.map((item) => (
                    <TableRow
                      key={item._id}
                      sx={{
                        '&:last-child td, &:last-child th': { border: 0 }
                      }}
                    >
                      <TableCell component="th" scope="row" sx={{ alignSelf: 'center' }}>
                        {item.name}
                      </TableCell>
                      <TableCell sx={{ textAlign: 'right' }} className={styles.wrapButton}>
                        <Button onClick={() => { handleAdd(item.name) }}>+</Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
          <div className={styles.gridContainer}>
            <PaginationControlled page={page} onChange={handleChange}/>
            <Button
              onClick={() => {
                setSelected([])
              }}
              sx={{
                border: 1,
                width: 80
              }}>Clear</Button>
            <Button
              onClick={() => { console.log(selected) }}
              sx={{
                border: 1,
                width: 80
              }}>Add</Button>
          </div>
        </Box>
      </Modal>
    </div>
  )
}