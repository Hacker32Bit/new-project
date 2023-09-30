import { Container, Col, Row, Card, Button, Table } from "react-bootstrap";

function Main() {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <Card style={{ textAlign: "center" }}>
              <Card.Header>Free</Card.Header>
              <Card.Body>
                <Card.Title>$0/mo</Card.Title>
                <Card.Text>10 users included</Card.Text>
                <Card.Text>2 GB of storage</Card.Text>
                <Card.Text>Email support</Card.Text>
                <Card.Text>Help center access</Card.Text>
                <Button variant="outline-primary">Sign up for free</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ textAlign: "center" }}>
              <Card.Header>Pro</Card.Header>
              <Card.Body>
                <Card.Title>$15/mo</Card.Title>
                <Card.Text>20 users included</Card.Text>
                <Card.Text>10 GB of storage</Card.Text>
                <Card.Text>Priority email support</Card.Text>
                <Card.Text>Help center access</Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card border="primary" style={{ textAlign: "center" }}>
              <Card.Header>Enterprise</Card.Header>
              <Card.Body>
                <Card.Title>$29/mo</Card.Title>
                <Card.Text>30 users included</Card.Text>
                <Card.Text>15 GB of storage</Card.Text>
                <Card.Text>Phone and email support</Card.Text>
                <Card.Text>Help center access</Card.Text>
                <Button variant="primary">Contact us</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row style={{textAlign: "center"}}>
          <h1>Compare plans</h1>
          <Table hover variant="white">
            <thead>
              <tr>
                <th></th>
                <th>Free</th>
                <th>Pro</th>
                <th>Enterprise</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{textAlign: "left"}}>Public</td>
                <td>✓</td>
                <td>✓</td>
                <td>✓</td>
              </tr>
              <tr>
                <td style={{textAlign: "left"}}>Private</td>
                <td></td>
                <td>✓</td>
                <td>✓</td>
              </tr>
              <tr>
                <td style={{textAlign: "left"}}>Permissions</td>
                <td>✓</td>
                <td>✓</td>
                <td>✓</td>
              </tr>
              <tr>
                <td style={{textAlign: "left"}}>Sharing</td>
                <td></td>
                <td>✓</td>
                <td>✓</td>
              </tr>
              <tr>
                <td style={{textAlign: "left"}}>Unlimited members</td>
                <td></td>
                <td>✓</td>
                <td>✓</td>
              </tr>
              <tr>
                <td style={{textAlign: "left"}}>Extra security</td>
                <td></td>
                <td></td>
                <td>✓</td>
              </tr>
            </tbody>
          </Table>
        </Row>
      </Container>
    </>
  );
}

export default Main;
