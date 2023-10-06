import { Card } from "react-bootstrap";

function NewsCard({ data, handleClick }) {
  const { image, title, text } = data;

  return (
    <Card className="mb-4" onClick={() => handleClick(data)}>
      <Card.Img variant="top" src={image}></Card.Img>
      <Card.Header>{title}</Card.Header>
      <Card.Body>
        <Card.Text>{text}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default NewsCard;
