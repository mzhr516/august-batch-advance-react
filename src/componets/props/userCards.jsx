import { Card } from "react-bootstrap";

const UserCards = ({users}) => {


  return (
    <div style={{ display: "flex" }}>
      {users.map((value) => {
        return (
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>{value.name}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                email:{value.email}
              </Card.Subtitle>
              <Card.Subtitle className="mb-2 text-muted">
                age:{value.age}
              </Card.Subtitle>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
};
export default UserCards;


