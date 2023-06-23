import type { SongDtoRequest, SongDtoSingle } from '@/module/song/song.dto.ts'

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
          ]
        }
      ],
      is_liked: false
    },
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
          ]
        }
      ],
      is_liked: false
    },
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
          ]
        }
      ],
      is_liked: false
    },
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
          ]
        }
      ],
      is_liked: false
    },
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
          ]
        }
      ],
      is_liked: false
    },
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
          ]
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
      albums: [
        '645e89d56b074f1141e5d4fd'
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
          ]
        }
      ],
      is_liked: false
    }, {
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
      albums: [
        '645e89d56b074f1141e5d4fd'
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
          ]
        }
      ],
      is_liked: false
    }, {
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
      albums: [
        '645e89d56b074f1141e5d4fd'
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
          ]
        }
      ],
      is_liked: false
    }, {
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
      albums: [
        '645e89d56b074f1141e5d4fd'
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
          ]
        }
      ],
      is_liked: false
    }

  ]
export async function getSongs (config: SongDtoRequest): Promise<{ status: boolean, data: SongDtoSingle[] }> {
  return await new Promise((resolve) => {
    setTimeout(() => {
      resolve(
        {
          status: true,
          data: mockSongs.slice((config.params.page - 1) * 5, config.params.page * 5)
        }
      )
    }, 2000)
  })
}
