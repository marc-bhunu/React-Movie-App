import {Container, Row, Col} from 'react-bootstrap'
export const Footer = () => {
  return (
    <Container>
      <Row>
        <Col className='text-center py-3'>
          <footer>Copyright &copy; The Movie App</footer>
        </Col>
      </Row>
    </Container>
  )
}
