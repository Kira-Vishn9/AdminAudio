import type { IArtists, ISong, ISongFilled } from '@module/song/song.model.ts'

export interface SongDtoSingle extends ISong {}
export interface SongDtoResp extends ISongFilled {}
export interface ArtistsDtoResp extends IArtists {}

export interface SongDtoRequest {
  params: {
    page: number
    count: number

  }
}
