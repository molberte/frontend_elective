import React from 'react'
import { Row } from 'react-bootstrap'
import { FooterStyled } from './Footer.styled'

export const Footer = () => {
  return (
    <FooterStyled>
      <Row className="social-media">
        <h3>Это футер</h3>
      </Row>
    </FooterStyled>
  )
}
