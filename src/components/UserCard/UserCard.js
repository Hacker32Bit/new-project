import { Card } from "react-bootstrap";

function UserCard(data) {
  const { name, surname, photo, specialization, about } = data.userData;

  return (
    <Card className="mb-4 text-center">
      <Card.Header
        className="rounded-1"
        style={{
          background:
            "linear-gradient(180deg, rgba(255,0,0,1) 0%, rgba(110,14,14,1) 100%)",
        }}
      >
        <Card.Img
          variant="top"
          className="border border-5 border-white rounded-circle"
          style={{ width: "150px", margin: "40px 0 -70px 0" }}
          src={photo}
        ></Card.Img>
      </Card.Header>
      <Card.Body style={{ paddingTop: "70px" }}>
        <Card.Text>
          <h4>
            Hi, {name} {surname}!
          </h4>
          <h6>{specialization}</h6>
          <hr
            class="my-3"
            style={{ border: "2px solid #b80707", opacity: 1 }}
          />
          {about}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default UserCard;
