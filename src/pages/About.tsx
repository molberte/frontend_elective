import React from 'react'
import { useNavigate } from 'react-router'
import { Container, Row, Col, Button } from 'react-bootstrap'

export const About = () => {
  const navigate = useNavigate()

  const handleBack = () => {
    navigate(-1)
  }
  return (
    <div className="About">
      <div className="back-next-button">
        <Container className="about-container">
          <Row className="about-body">
            <Col>
              <h1>A little bit about me!</h1>
              <div className="back-next-button">
                <Button onClick={handleBack} variant="link">
                  Back
                </Button>
              </div>
            </Col>
            <Col>
              <p>Something</p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}
