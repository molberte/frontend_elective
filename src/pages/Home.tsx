import React from 'react'
import { Container, Card, Row, Col } from 'react-bootstrap'

export const Home = () => {
  return (
    <div className="home">
      <Container>
        <Row className="home-main-row">
          <Col className="col-4">
            <Card style={{ width: '80vh' }}>
              <Card.Body>
                <Card.Subtitle className="mb-2 text-muted">
                  <h2>Our Crushes</h2>
                </Card.Subtitle>
                <Card.Text>
                  <p>Here you can navigate to look at the gallery</p>
                </Card.Text>
                <Card.Link href="/Gallery">
                  Kseniya&#39;<s></s> Crushes
                </Card.Link>
                <Card.Link href="/Gallery">Ksu&#39;s Crushes</Card.Link>
                <Card.Link href="/Gallery">Alisa&#39;s Crushes</Card.Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
