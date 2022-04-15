import React from 'react'
import { useNavigate } from 'react-router'
import { Container, Row, Col, Button } from 'react-bootstrap'

export const About = () => {
  const navigate = useNavigate()

  const handleBack = () => {
    navigate(-1)
  }
  return (
    <Container className="About">
      <Row className="about-body">
        <Col>
          <h1>About our project!</h1>
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
