function Greeting(props) {
  console.log(props);
  return (
    <>
      <h1>Hello !</h1>
      <p>my name is {props.data}</p>
    </>
  );
}

export default Greeting;
