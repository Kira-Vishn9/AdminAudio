interface ISong {
  _id: string
  name: string
  code: string
  cover_src: string
  album_code: string
  release_date: string
  label: string
  genres: string[]
  __v: number
  albums: IAlbums[]
  artists: IArtists[]
  is_liked: boolean
}
interface IGenres {
  _id: string
  name: string
  code: string
  __v: number
}

interface IArtists {
  _id: string
  name: string
  is_verified: boolean
  code: string
  genre: string[]
  song: string[]
  album: string[]
  __v: number
}

interface IAlbums {
  _id: string
  name: string
  code: string
  description_en: string
  cover_src: string
  label: string
  artists: string[]
  songs: string[]
  genres: string[]
  old_id: number
  __v: number
}

export async function getSongs (): Promise<{ status: number, data: ISong[] }> {
  const mockSongs: ISong[] =
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
         __v: 0,
         albums: [
           {
             _id: '645e89d56b074f1141e5d4fd',
             name: 'Main10',
             code: 'main10',
             description_en: "Melbourne-based producer Galtier's new EP dropped from Apothecary Composotions, a label notable for releases of Slick Shoota, 813 and more. Compiled with the stoic heavy bass originals are three excellent remixes by Helix, Distal and Presk. Recommended to bass, techno and house DJs.",
             cover_src: 'https://cdn.goodmusi.com/covers/Galtier-MAin10.jpg',
             label: '645e894e6b074f1141e5ba29',
             artists: [
               '645e89486b074f1141e5a7f2'
             ],
             songs: [
               '645e89506b074f1141e5bd21',
               '645e89506b074f1141e5bd22',
               '645e89506b074f1141e5bd23',
               '645e89506b074f1141e5bd24',
               '645e89506b074f1141e5bd25',
               '645e89506b074f1141e5bd26',
               '645e89506b074f1141e5bd27'
             ],
             genres: [
               '645e894e6b074f1141e5b9db'
             ],
             old_id: 23,
             __v: 0
           }
         ],
         artists: [
           {
             _id: '645e89486b074f1141e5a7f2',
             name: 'Galtier',
             is_verified: true,
             code: 'galtier',
             genre: [
               '645e894e6b074f1141e5b9db'
             ],
             song: [
               '645e89506b074f1141e5bd21',
               '645e89506b074f1141e5bd22',
               '645e89506b074f1141e5bd23',
               '645e89506b074f1141e5bd24',
               '645e89506b074f1141e5bd25',
               '645e89506b074f1141e5bd26',
               '645e89506b074f1141e5bd27'
             ],
             album: [
               '645e89d56b074f1141e5d4fd'
             ],
             __v: 0
           }
         ],
         is_liked: false
       },
       {
         _id: '645e89506b074f1141e5bd23',
         name: '03. Sleep Vessel',
         code: '03._sleep_vessel',
         cover_src: 'https://cdn.goodmusi.com/covers/Galtier-MAin10.jpg',
         album_code: 'Galtier - Main10',
         release_date: '2014-08-10T20:00:00.000Z',
         label: '',
         genres: [
           '645e894e6b074f1141e5b9db'
         ],
         __v: 0,
         albums: [
           {
             _id: '645e89d56b074f1141e5d4fd',
             name: 'Main10',
             code: 'main10',
             description_en: "Melbourne-based producer Galtier's new EP dropped from Apothecary Composotions, a label notable for releases of Slick Shoota, 813 and more. Compiled with the stoic heavy bass originals are three excellent remixes by Helix, Distal and Presk. Recommended to bass, techno and house DJs.",
             cover_src: 'https://cdn.goodmusi.com/covers/Galtier-MAin10.jpg',
             label: '645e894e6b074f1141e5ba29',
             artists: [
               '645e89486b074f1141e5a7f2'
             ],
             songs: [
               '645e89506b074f1141e5bd21',
               '645e89506b074f1141e5bd22',
               '645e89506b074f1141e5bd23',
               '645e89506b074f1141e5bd24',
               '645e89506b074f1141e5bd25',
               '645e89506b074f1141e5bd26',
               '645e89506b074f1141e5bd27'
             ],
             genres: [
               '645e894e6b074f1141e5b9db'
             ],
             old_id: 23,
             __v: 0
           }
         ],
         artists: [
           {
             _id: '645e89486b074f1141e5a7f2',
             name: 'Galtier',
             is_verified: true,
             code: 'galtier',
             genre: [
               '645e894e6b074f1141e5b9db'
             ],
             song: [
               '645e89506b074f1141e5bd21',
               '645e89506b074f1141e5bd22',
               '645e89506b074f1141e5bd23',
               '645e89506b074f1141e5bd24',
               '645e89506b074f1141e5bd25',
               '645e89506b074f1141e5bd26',
               '645e89506b074f1141e5bd27'
             ],
             album: [
               '645e89d56b074f1141e5d4fd'
             ],
             __v: 0
           }
         ],
         is_liked: false
       },
       {
         _id: '645e89506b074f1141e5bd22',
         name: '02. Chalice',
         code: '02._chalice',
         cover_src: 'https://cdn.goodmusi.com/covers/Galtier-MAin10.jpg',
         album_code: 'Galtier - Main10',
         release_date: '2014-08-10T20:00:00.000Z',
         label: '',
         genres: [
           '645e894e6b074f1141e5b9db'
         ],
         __v: 0,
         albums: [
           {
             _id: '645e89d56b074f1141e5d4fd',
             name: 'Main10',
             code: 'main10',
             description_en: "Melbourne-based producer Galtier's new EP dropped from Apothecary Composotions, a label notable for releases of Slick Shoota, 813 and more. Compiled with the stoic heavy bass originals are three excellent remixes by Helix, Distal and Presk. Recommended to bass, techno and house DJs.",
             cover_src: 'https://cdn.goodmusi.com/covers/Galtier-MAin10.jpg',
             label: '645e894e6b074f1141e5ba29',
             artists: [
               '645e89486b074f1141e5a7f2'
             ],
             songs: [
               '645e89506b074f1141e5bd21',
               '645e89506b074f1141e5bd22',
               '645e89506b074f1141e5bd23',
               '645e89506b074f1141e5bd24',
               '645e89506b074f1141e5bd25',
               '645e89506b074f1141e5bd26',
               '645e89506b074f1141e5bd27'
             ],
             genres: [
               '645e894e6b074f1141e5b9db'
             ],
             old_id: 23,
             __v: 0
           }
         ],
         artists: [
           {
             _id: '645e89486b074f1141e5a7f2',
             name: 'Galtier',
             is_verified: true,
             code: 'galtier',
             genre: [
               '645e894e6b074f1141e5b9db'
             ],
             song: [
               '645e89506b074f1141e5bd21',
               '645e89506b074f1141e5bd22',
               '645e89506b074f1141e5bd23',
               '645e89506b074f1141e5bd24',
               '645e89506b074f1141e5bd25',
               '645e89506b074f1141e5bd26',
               '645e89506b074f1141e5bd27'
             ],
             album: [
               '645e89d56b074f1141e5d4fd'
             ],
             __v: 0
           }
         ],
         is_liked: false
       }]

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
