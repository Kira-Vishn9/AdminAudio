import React from 'react'
import { useTheme } from '@mui/material/styles'
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  PlayArrowIcon,
  SkipNextIcon,
  SkipPreviousIcon,
  Typography
} from '@components/index.ts'

export default function AlbumCard ({ array }): JSX.Element {
  const theme = useTheme()
  console.log(array.name)
  return (
    <Card sx={{ display: 'flex' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            {(array.name).split(' ').map((item: string) => item.replace(/\[|\]/g, '')).join(' ')}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            Mac Miller
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
          <IconButton aria-label="previous">
            {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
          </IconButton>
          <IconButton aria-label="play/pause">
            <PlayArrowIcon sx={{ height: 38, width: 38 }} />
          </IconButton>
          <IconButton aria-label="next">
            {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
          </IconButton>
        </Box>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image="/static/images/cards/live-from-space.jpg"
        alt="Live from space album cover"
      />
    </Card>
  )
}
