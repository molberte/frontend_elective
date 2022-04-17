import PhotoAlbum from 'react-photo-album'
import React from 'react'
import { GalleryStyled } from './Gallery.styled'

import Priest from '../../assets/Crushes/Priest.jpg'
import Tadashi from '../../assets/Crushes/Tadashi.jpg'
import Joe from '../../assets/Crushes/Joe.jpg'
import Nick from '../../assets/Crushes/Nick.png'

import Darcy from '../../assets/Crushes/MrDarcy.jpg'
import FredGeorge from '../../assets/Crushes/FredGeorge.jpg'
import Sherlock from '../../assets/Crushes/Sherlock.jpg'
import Jared from '../../assets/Crushes/Jared.jpg'

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
    {
      src: Darcy,
      width: 500,
      height: 680,
    },
    {
      src: FredGeorge,
      width: 1384,
      height: 899,
    },
    {
      src: Jared,
      width: 1000,
      height: 1500,
    },
    {
      src: Sherlock,
      width: 1200,
      height: 750,
    },
  ]
  return (
    <GalleryStyled>
      <PhotoAlbum layout="masonry" photos={photos} />
    </GalleryStyled>
  )
}
