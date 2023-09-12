import "./App.css";
import { AddRectangle } from "./componets/hooks/useState/addRectangle";
import { ChangeColor } from "./componets/hooks/useState/changeColor";
import { GetFullName } from "./componets/hooks/useState/getFullName";
import { GetInputValue } from "./componets/hooks/useState/getInputValue";
import { GetValue } from "./componets/hooks/useState/getValue";
import { ModelContainer } from "./componets/hooks/useState/modelcontainer";
import { NextUser } from "./componets/hooks/useState/nextUser";
import { ShowImage } from "./componets/hooks/useState/showImage";
import Props from "./componets/props/props";
import { Counter } from "./componets/hooks/useState/counter";
import { FormHandling } from "./componets/hooks/useState/formHandling";
import { FormHandling2 } from "./componets/hooks/useState/FormHandling2";

function App() {
  return (
    <div>
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
      {/* <Counter />
      <br />
      <AddRectangle />
      <br />
      <ShowImage />
      <br />
      <ModelContainer /> */}
      <div style={{ width: "50%", marginLeft: "10%", marginTop: "20px" }}>
        <FormHandling />
        <br />
        <FormHandling2 />
      </div>
    </div>
  );
}

export default App;
