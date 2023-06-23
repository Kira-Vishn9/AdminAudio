import React from 'react'
import { useTheme } from '@mui/material/styles'
import { Box, Card, CardContent, CardMedia, MoreHorizIcon, Typography } from '@components/index.ts'
import { type ISong } from '@/module/song'

export default function Item ({ songs }: { songs: ISong }): JSX.Element {
  const theme = useTheme()
  console.log(songs)
  return (
    <Card sx={{ display: 'flex', width: '250', marginBottom: 2 }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto', width: 250 }}>
          <Typography component="div" variant="h5">
            {songs.name}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            {songs.album_code}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
          {(songs.release_date).split('T').splice(0, 1)}
          </Typography>
        </CardContent>
        {/* <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}> */}
        {/*   <IconButton aria-label="previous"> */}
        {/*     {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />} */}
        {/*   </IconButton> */}
        {/*   /!* <IconButton aria-label="play/pause"> *!/ */}
        {/*   /!*   <PlayArrowIcon sx={{ height: 38, width: 38 }} /> *!/ */}
        {/*   /!* </IconButton> *!/ */}
        {/*   <IconButton aria-label="next"> */}
        {/*     {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />} */}
        {/*   </IconButton> */}
        {/* </Box> */}
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 120 }}
        image={songs.cover_src}
        alt="Live from space album cover"
      />
      <MoreHorizIcon />
    </Card>
  )
}
