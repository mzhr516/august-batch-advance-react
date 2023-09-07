import "./App.css";
import { ChangeColor } from "./componets/hooks/useState/changeColor";
import { Counter } from "./componets/hooks/useState/counter";
import { GetInputValue } from "./componets/hooks/useState/getInputValue";
import Props from "./componets/props/props";

function App() {
  return (
    <>
      {/* <Props /> */}
      <Counter />
      <br/>
      <GetInputValue/>
      <br/>
      <ChangeColor/>
    </>
  );
}

export default App;
