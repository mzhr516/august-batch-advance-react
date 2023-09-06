const Events = () => {


  const clk = () => {
    console.log("click on button");
  };

  const mouseover = () => {
    console.log("mouse over on h1");
  };

  const abc = (e) => {
    console.log(e.target.value);
  };
  

  return (
    <>
      <button
        onClick={clk}
        onMouseLeave={()=>{

        }}
      >
        click me
      </button>
      
      <h1
        onClick={() => {
          console.log("click on h1");
        }}
        onMouseOver={mouseover}
      >
        hello world
      </h1>

      <input type="emial" onChange={abc} />

    </>
  );
};
export default Events;
