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
import { FormHandlingWithLib } from "./componets/hooks/useState/formHandlingWithLib";
import { ValidationWithLib } from "./componets/hooks/useState/ValidationWithLib";
import { Parent } from "./componets/hooks/useEffect/parent";
import { Example1 } from "./componets/hooks/useEffect/example1";
import { CrudOperations } from "./componets/CRUD/CurdOpt";
import { UseCase } from "./componets/hooks/useRef/example";
import { UseCase2 } from "./componets/hooks/useRef/example1";
import { useRef } from "react";
import { UseCase1 } from "./componets/hooks/usemomo/Example1";
import { ParentElement } from "./componets/hooks/usecallback/parent";

function App() {
  const bottomRef = useRef();
  const topRef = useRef();
  const bottom = () => {
    bottomRef.current.scrollIntoView();
  };
  const top = () => {
    topRef.current.scrollIntoView()
  };
  return (
    <div>
      {/* <button ref={topRef} onClick={bottom}>
        to bottom
      </button> */}

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
        {/* <h1> custom validation</h1>
        <FormHandling /> */}
        <br />
        {/* <h1>validation with library</h1> */}
        {/* <FormHandlingWithLib />
        <FormHandling2 />

        <ValidationWithLib />

        <Parent />
        <Example1 />
        <CrudOperations />
        <ModelContainer />
        <UseCase />
        <UseCase2 /> */}



        {/* <button ref={bottomRef} onClick={top}>
          to top
        </button> */}
        {/* <UseCase1/> */}
        <ParentElement/>
      </div>
    </div>
  );
}

export default App;
