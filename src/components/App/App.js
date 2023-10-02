import { Container, Col, Row, Card, Button, Table } from "react-bootstrap";
import Header from "../Header";
import NewCard from "../NewCard";

function App() {
  const newsList = [
    {
      id: 1,
      img: "/images/image1.avif",
      title: "News title 1",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
    },
    {
      id: 2,
      img: "/images/image2.jpg",
      title: "News title 2",
      text: "text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    },
    {
      id: 3,
      img: "/images/image3.webp",
      title: "News title 3",
      text: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
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
              <Col lg={3} md={4} sm={6} xs={12} key={item.id}>
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
