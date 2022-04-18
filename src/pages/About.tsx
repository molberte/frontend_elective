import React from 'react'
import { useNavigate } from 'react-router'
import { Container, Row, Col, Button } from 'react-bootstrap'

export const About = () => {
  const navigate = useNavigate()

  const handleBack = () => {
    navigate(-1)
  }
  return (
    <Container className="about">
      <Row className="about-body">
        <Col>
          <h1>About our project!</h1>
          <h5>
            This project aims to entertain you. You can look at Our Crushes
            Gallery or take The Compatibility Test. Enjoy!
          </h5>
          <div className="back-next-button">
            <Button onClick={handleBack} variant="link">
              Back
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  )
}
