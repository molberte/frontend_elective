import Album from 'react-photo-album'
import React from 'react'
import { GalleryStyled } from './Gallery.styled'

export const Gallery = () => {
  const photos = [
    {
      src: 'https://i.imgur.com/WmNfVCB.jpg',
      width: 600,
      height: 900,
    },
    {
      src: 'https://i.imgur.com/E8woOHw.jpg',
      width: 600,
      height: 528,
    },
    {
      src: 'https://i.imgur.com/gfC1DjV.jpg',
      width: 1200,
      height: 675,
    },
    {
      src: 'https://i.imgur.com/iKAaTN2.png',
      width: 787,
      height: 799,
    },
    {
      src: 'https://i.imgur.com/3sWfO7z.jpg',
      width: 500,
      height: 680,
    },
    {
      src: 'https://i.imgur.com/x2OA9uR.jpg',
      width: 1138,
      height: 742,
    },
    {
      src: 'https://i.imgur.com/xwNFvJ1.jpg',
      width: 1000,
      height: 1500,
    },
    {
      src: 'https://i.imgur.com/v3JjFxh.jpg',
      width: 1200,
      height: 750,
    },
  ]
  return (
    <GalleryStyled>
      <Album layout="masonry" photos={photos} />
    </GalleryStyled>
  )
}
