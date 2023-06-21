export interface ISong {
  _id: string
  name: string
  code: string
  cover_src: string
  album_code: string
  release_date: string
  genres: string[]
  albums: string[]
  artists: IArtists[]
  label: string
  is_liked: boolean
}

export interface ISongFilled extends ISong {
  genres: IGenres[]
  albums: IAlbums[]
  artists: IArtists[]
}

interface IGenres {
  _id: string
  name: string
  code: string
}

interface IArtists {
  _id: string
  name: string
  is_verified: boolean
  code: string
  genre: string[]
  song: string[]
  album: string[]
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
}
