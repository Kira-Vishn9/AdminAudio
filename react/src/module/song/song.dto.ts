import type { ISong } from '@/module/song/song.model.ts'

export interface SongDtoSingle extends ISong {}

export interface SongDtoRequest {
  params: {
    page: number
  }
}
