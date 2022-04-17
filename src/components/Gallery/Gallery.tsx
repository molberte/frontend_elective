import PhotoAlbum from 'react-photo-album'
import React from 'react'
import { GalleryStyled } from './Gallery.styled'

import Priest from '../../assets/Crushes/Priest.jpg'
import Tadashi from '../../assets/Crushes/Tadashi.jpg'
import Joe from '../../assets/Crushes/Joe.jpg'
import Nick from '../../assets/Crushes/Nick.png'

export const Gallery = () => {
  const photos = [
    {
      src: Priest,
      width: 600,
      height: 900,
    },
    {
      src: Tadashi,
      width: 600,
      height: 528,
    },
    {
      src: Joe,
      width: 1200,
      height: 675,
    },
    {
      src: Nick,
      width: 787,
      height: 799,
    },
  ]
  return (
    <GalleryStyled>
      <PhotoAlbum layout="masonry" photos={photos} />
    </GalleryStyled>
  )
}
