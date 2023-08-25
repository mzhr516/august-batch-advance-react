import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Greeting from "./componets/Greeting";
import UserView from "./componets/userDetail";
import CityDetailView from "./componets/CityDetails";

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
  return (
    <>
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
    </>
  );
}

export default App;
