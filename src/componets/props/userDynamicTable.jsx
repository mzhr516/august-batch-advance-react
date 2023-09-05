import { Table } from "react-bootstrap";

const UserDynamicTable = ({users}) => {


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
          {users.map((value,index) => {
            return (
              <tr>
                <td>{index+1}</td>
                <td>{value.name}</td>
                <td>{value.age}</td>
                <td>{value.email}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};
export default UserDynamicTable;
