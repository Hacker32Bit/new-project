import { Card } from "react-bootstrap";

function NewCard(props) {

  return (
    <Card className="mb-4">
      <Card.Img variant="top" src={props.img}></Card.Img>
      <Card.Header>{props.title}</Card.Header>
      <Card.Body>
        <Card.Text>{props.text}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default NewCard;
