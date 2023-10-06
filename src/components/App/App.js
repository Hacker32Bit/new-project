import { Container, Col, Row, Table } from "react-bootstrap";
import { useState } from "react";
import Header from "../Header";
import NewsCard from "../NewsCard";
import FullNews from "../FullNews";
import Esim from "../Esim";

function App() {
  const [selectedNews, setSelectedNews] = useState(null)
  const [isClose, setIsClose] = useState(true)
 
  const handleClick = (newsItem) => {
    if (selectedNews && newsItem.id === selectedNews.id){
      setIsClose((prevState) => !prevState)
    }
    else {
      setSelectedNews(newsItem);
      setIsClose(false)
    }
  };

  const news = [
    {
      id: 1,
      image: "/images/image1.avif",
      title: "News title 1",
      text: "Lorem Ipsum is simply...",
      fullText:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
      pubDate: "18.08.2012",
    },
    {
      id: 2,
      image: "/images/image2.jpg",
      title: "News title 2",
      text: "text ever since the 1500s...",
      fullText:
        "text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      pubDate: "18.10.2011",
    },
    {
      id: 3,
      image: "/images/image3.webp",
      title: "News title 3",
      text: "It has survived not only...",
      fullText:
        "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
      pubDate: "04.08.2009",
    },
  ];

  const userData = {
    name: "Gektor",
    surname: "Gevorgyan",
    photo: "/images/userphoto.jpg",
    specialization: "Software Developer",
    about:
      "My current stack of technologies is: C++, Python, Java, C#, Web Developing (HTML, CSS, PHP, JS)",
  };

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
          {news.map((item) => {
            return (
              <Col lg={3} md={4} sm={6} xs={12} key={item.id}>
                <NewsCard data={item} handleClick={handleClick} />
              </Col>
            );
          })}
        </Row>
      </Container>

      { selectedNews && isClose ? (
        <Container>
          <FullNews selectedNews={selectedNews} />
        </Container>
      ) : null}
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

      <Container fluid className="bg-dark text-white p-3 text-center">
        <Container>&copy; 2023 News portal. All rights Reserved.</Container>
      </Container>
    </>
  );
}

export default App;
