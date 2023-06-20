export interface Ichild {
  children: JSX.Element | JSX.Element[]
}

export interface IArtist {
  artists: {
    code: string
    cover_src: string
    description_en: string
    genres: []
    is_liked: boolean
    label: string
    name: string
    old_id: number
    songs: []
    __v: number
    _id: string
  }
}
