import { Table } from "react-bootstrap";

const UserTable = () => {
  const users = [
    { name: "Alice", age: 25, email: "alice@gmail.com" },
    { name: "Boby", age: 32, email: "bob@example.com" },
    { name: "Charlie", age: 22, email: "charlie@example.com" },
    { name: "David", age: 28, email: "david@example.com" },
    { name: "Eva", age: 35, email: "eva@example.com" },
  ];

  const [first, second, thired, fourth, fifth] = users;

  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th> Name</th>
            <th>Age</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {/* <td>{users[0].name}</td>
            <td>{users[0].age}</td>
            <td>{users[3].email}</td> */}
            
            <td>1</td>
            <td>{first.name}</td>
            <td>{first.age}</td>
            <td>{first.email}</td>
          </tr>
          <tr>
            <td>2</td>
            <td>{second.name}</td>
            <td>{second.age}</td>
            <td>{second.email}</td>
          </tr>
          <tr>
            <td>2</td>
            <td>{thired.name}</td>
            <td>{thired.age}</td>
            <td>{thired.email}</td>
          </tr>
          <tr>
            <td>2</td>
            <td>{fourth.name}</td>
            <td>{fourth.age}</td>
            <td>{fourth.email}</td>
          </tr>
          <tr>
            <td>2</td>
            <td>{fifth.name}</td>
            <td>{fifth.age}</td>
            <td>{fifth.email}</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
};

export default UserTable;
