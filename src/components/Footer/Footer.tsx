import React from 'react'
import { Row } from 'react-bootstrap'
import { FooterStyled } from './Footer.styled'

export const Footer = () => {
  return (
    <FooterStyled>
      <Row className="social-media">
        Made by Kseniya Evdokimova, Kseniya Kudasheva, Alyssa Ivanova
      </Row>
    </FooterStyled>
  )
}
