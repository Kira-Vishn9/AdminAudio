export interface ISong {
  album_code: string
  albums: IAlbums[] | string[]
  artists: IArtists[]
  code: string
  cover_src: string
  duration: null | number
  genres: IGenres[]
  is_liked: boolean
  label: string
  name: string
  release_date: string
  _id: string
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

export interface IArtists {
  _id: string
  name: string
  is_verified: boolean
  code: string
  genre: string[]
  song: string[]
  album: string[]
  cover_src: string
}

export interface IAlbums {
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
