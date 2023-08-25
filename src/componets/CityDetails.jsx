import { Card, Button } from "react-bootstrap";

const CityDetailView = ({ detail={} }) => {
  //   console.log(detail)
  const { name, state="undefined", code, popularPlace, population, img } = detail;
  return (
    <>
      <Card style={{ width: "18rem", backgroundColor: "" }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{state}</Card.Text>
          <Card.Text>{code}</Card.Text>
          <Card.Text>{popularPlace}</Card.Text>
          <Card.Text>{population}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default CityDetailView;
