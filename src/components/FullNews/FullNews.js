import { Card } from "react-bootstrap";

export default function FullNews({ selectedNews }) {
    console.log(selectedNews)
  return (
    <Card className="bg-dark text-white">
      <Card.Img
        src={selectedNews.image}
        alt="Card image"
      />
      <Card.ImgOverlay>
        <Card.Title>
          {selectedNews.title}
        </Card.Title>
        <Card.Text>
          {
            selectedNews.fullText
          }
        </Card.Text>
        <Card.Text>
          {
            selectedNews.pubDate
          }
        </Card.Text>
      </Card.ImgOverlay>
    </Card>
  );
}
