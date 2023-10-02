import { Container, Col, Row, Card, Button, Table } from "react-bootstrap";
import Header from "../Header";
import NewCard from "../NewCard";

function App() {
  const newsList = [
    {
      img: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
      title: "News title 1",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
    },
    {
      img: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
      title: "News title 2",
      text: "text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    },
    {
      img: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
      title: "News title 3",
      text: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
    },
    {
      img: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
      title: "News title 4",
      text: "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop",
    },
  ];

  return (
    <>
      <Header />
      <Container className="mt-5 mb-5" style={{ textAlign: "center" }}>
        <h1>Pricing</h1>
        <p>
          Quickly build an effective pricing table for your potential customers
          with this Bootstrap example. It’s built with default Bootstrap
          components and utilities with little customization.
        </p>
      </Container>
      <Container>
        <Row>
          {newsList.map((item) => {
            return (
              <Col lg={3} md={4} sm={6} xs={12}>
                <NewCard
                  img={item.img}
                  title={item.title}
                  text={item.text}
                ></NewCard>
              </Col>
            );
          })}
        </Row>
      </Container>

      <Container>
        <Row style={{ textAlign: "center" }}>
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
                <td style={{ textAlign: "left" }}>Public</td>
                <td>✓</td>
                <td>✓</td>
                <td>✓</td>
              </tr>
              <tr>
                <td style={{ textAlign: "left" }}>Private</td>
                <td></td>
                <td>✓</td>
                <td>✓</td>
              </tr>
              <tr>
                <td style={{ textAlign: "left" }}>Permissions</td>
                <td>✓</td>
                <td>✓</td>
                <td>✓</td>
              </tr>
              <tr>
                <td style={{ textAlign: "left" }}>Sharing</td>
                <td></td>
                <td>✓</td>
                <td>✓</td>
              </tr>
              <tr>
                <td style={{ textAlign: "left" }}>Unlimited members</td>
                <td></td>
                <td>✓</td>
                <td>✓</td>
              </tr>
              <tr>
                <td style={{ textAlign: "left" }}>Extra security</td>
                <td></td>
                <td></td>
                <td>✓</td>
              </tr>
            </tbody>
          </Table>
        </Row>
      </Container>
      {/* <Main /> */}
    </>
  );
}

export default App;
