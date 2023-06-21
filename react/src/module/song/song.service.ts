import type { SongDtoSingle } from '@/module/song/song.dto.ts'

export async function getSongs (): Promise<{ status: number, data: SongDtoSingle[] }> {
  const mockSongs: SongDtoSingle[] =
     [
       {
         _id: '645e89506b074f1141e5bd21',
         name: '01. Main10',
         code: '01._main10',
         cover_src: 'https://cdn.goodmusi.com/covers/Galtier-MAin10.jpg',
         album_code: 'Galtier - Main10',
         release_date: '2014-08-10T20:00:00.000Z',
         label: '',
         genres: [
           '645e894e6b074f1141e5b9db'
         ],
         albums: [
           'asdasd'
         ],
         artists: [
           'asdasd'
         ],
         is_liked: false
       }
     ]

  return await new Promise((resolve) => {
    setTimeout(() => {
      resolve(
        {
          status: 200,
          data: mockSongs
        }
      )
    }, 200)
  })
}
