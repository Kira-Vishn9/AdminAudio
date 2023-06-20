import React, { useEffect, useState } from 'react'
import AlbumCard from '@/component/AlbumCard.tsx'
import getAllAlbum from '@/API/API.ts'

export default function Main (): JSX.Element {
  const [cards, setCards] = useState<JSX.Element[]>([])

  async function getAlbum (): Promise<JSX.Element[]> {
    const result: JSX.Element[] = []
    const data1 = await getAllAlbum()
    const data2 = data1?.albums
    data2.forEach((el: any) => {
      result.push(<AlbumCard key={el._id} array={el} />)
    })
    return result
  }

  useEffect(() => {
    getAlbum()
      .then((result) => {
        setCards(result)
      })
  }, [])

  return <div>{cards}</div>
}
