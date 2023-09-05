import { Button, Card } from "react-bootstrap";

const MenuItems = ({restaurantMenu}) => {


  return (
    <div style={{ display: "flex" }}>
      {restaurantMenu.map((menu) => (
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={menu.image} />
          <Card.Body>
            <Card.Title>{menu.item}</Card.Title>
            <Card.Text>{menu.description}</Card.Text>
            <Card.Text>{menu.price}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};
export default MenuItems;
