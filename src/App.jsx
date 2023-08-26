import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Greeting from "./componets/Greeting";
import UserView from "./componets/userDetail";
import CityDetailView from "./componets/CityDetails";
import Conatiner from "./componets/container";
import List from "./componets/ListView";
import UserTable from "./componets/UserTable";

function App() {
  const nanded = {
    name: "naned",
    state: "maharstra",
    code: "46541",
    img: "vite.svg",
    population: "10cr",
    popularPlace: "railway station",
  };
  const mumbai = {
    name: "mumbai",
    code: "658543",
    img: "vite.svg",
    population: "50cr",
    popularPlace: "india way of gate",
  };
  const user = { name: "john", age: 28 };
  return (
    <>
      <UserTable />
      <h1>{user.name}</h1>
      <p>{user.age}</p>

      <Greeting data="mazhar"></Greeting>
      <Greeting data="mohammad" />
      <Greeting />
      <hr />

      <UserView name="mohammad" age="30" city="nanded" />
      <hr />
      <UserView name="junaid" age="40" city="hyderabsd" />
      <hr />
      <UserView name="umair" age="50" city="mumbai" />

      <hr />

      <CityDetailView detail={nanded} />
      <CityDetailView detail={mumbai} />

      {/* children props */}
      <Conatiner>
        <table>
          <tr>
            <th>name</th>
            <th>address</th>
          </tr>
          <tr>
            <td>john</td>
            <td>new york</td>
          </tr>
          <tr>
            <td>junaid</td>
            <td>india</td>
          </tr>
        </table>
      </Conatiner>

      <Conatiner>
        <form action="">
          <label htmlFor=""> name</label>
          <input type="text" name="" id="" />
          <br />
          <label htmlFor=""> email</label>
          <input type="text" name="" id="" />
        </form>
      </Conatiner>

      <Conatiner>
        <ol>
          <li>react</li>
          <li>javascript</li>
          <li>html</li>
        </ol>
      </Conatiner>

      <List>
        <li>mango</li>
        <li>banana</li>
        <li>apple</li>
      </List>

      <List>
        <li>nanded</li>
        <li>mumbai</li>
        <li>hyd</li>
        <li>koljkata</li>
        <li>delhi</li>
      </List>
    </>
  );
}

export default App;
