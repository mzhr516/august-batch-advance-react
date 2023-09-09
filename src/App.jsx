import "./App.css";
import { AddRectangle } from "./componets/hooks/useState/addRectangle";
import { ChangeColor } from "./componets/hooks/useState/changeColor";
import { Counter } from "./componets/hooks/useState/counter";
import { GetFullName } from "./componets/hooks/useState/getFullName";
import { GetInputValue } from "./componets/hooks/useState/getInputValue";
import { GetValue } from "./componets/hooks/useState/getValue";
import { NextUser } from "./componets/hooks/useState/nextUser";
import { ShowImage } from "./componets/hooks/useState/showImage";
import Props from "./componets/props/props";

function App() {
  return (
    <div style={{ marginLeft: "40%" }}>
      {/* <Props /> */}
      {/* <Counter />
      <br />
      <GetInputValue />
      <br />
      <ChangeColor />
      <br />
      <GetValue />
      <br />
      <GetFullName />
      <br />
      <NextUser />
      <br /> */}
      <AddRectangle />
      <br />
      <ShowImage />
    </div>
  );
}

export default App;
