import type { ArtistsDtoResp, SongDtoRequest, SongDtoResp, SongDtoSingle } from '@module/song/song.dto.ts'
import { httpClient } from '@api/index.ts'

interface Genre {
  _id: string
  name: string
}
const mockGenres: Genre[] =
  [
    { _id: '1', name: 'Pop' },
    { _id: '2', name: 'Rock' },
    { _id: '3', name: 'Hip Hop' },
    { _id: '4', name: 'Jazz' },
    { _id: '5', name: 'Blues' },
    { _id: '6', name: 'Electronic' },
    { _id: '7', name: 'Country' },
    { _id: '8', name: 'R&B' },
    { _id: '9', name: 'Reggae' },
    { _id: '10', name: 'Classical' },
    { _id: '11', name: 'Folk' },
    { _id: '12', name: 'Indie' },
    { _id: '13', name: 'Metal' },
    { _id: '14', name: 'Punk' },
    { _id: '15', name: 'Funk' },
    { _id: '16', name: 'Soul' },
    { _id: '17', name: 'Gospel' },
    { _id: '18', name: 'Techno' },
    { _id: '19', name: 'House' },
    { _id: '20', name: 'Trance' },
    { _id: '21', name: 'Reggaeton' },
    { _id: '22', name: 'Ska' },
    { _id: '23', name: 'Disco' },
    { _id: '24', name: 'Fusion' },
    { _id: '25', name: 'Opera' },
    { _id: '26', name: 'Salsa' },
    { _id: '27', name: 'Bossa Nova' },
    { _id: '28', name: 'Ambient' },
    { _id: '29', name: 'Chillout' },
    { _id: '30', name: 'World Music' }
  ]
export async function getSongs (config: SongDtoRequest): Promise<{ songs: SongDtoSingle[] }> {
  return await httpClient.get('/song/admin/all', config)

  //
  // return await new Promise((resolve) => {
  //   setTimeout(() => {
  //     resolve(
  //       {
  //         songs: mockSongs.slice((config.params.page - 1) * 5, config.params.page * 5)
  //       }
  //     )
  //   }, 0)
  // })
}

export async function getSongInfo (id: string): Promise<{ song: SongDtoResp }> {
  return await httpClient.get('/song/info', { params: { id } })
}

export async function getArtists (config: SongDtoRequest): Promise<{ artists: ArtistsDtoResp }> {
  return await httpClient.get('/artist/all', config)
}

export async function getGenres (config: SongDtoRequest): Promise<{ genres: Genre[] }> {
  return await new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        genres: mockGenres.slice((config?.params?.page - 1) * 5, config.params.page * 5)
      })
    }, 0)
  })
}
