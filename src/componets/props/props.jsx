import CityAccordians from "./CityAccordian";
import CityDetailView from "./CityDetails";
import Events from "./Events";
import Greeting from "./Greeting";
import List from "./ListView";
import MenuItems from "./MenuItems";
import UserStaticTable from "./UserStaticTable";
import Conatiner from "./container";
import UserCards from "./userCards";
import UserView from "./userDetail";
import UserDynamicTable from "./userDynamicTable";

function Props() {
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
    const restaurantMenu = [
      {
        item: "Spaghetti Carbonara",
        description: "Creamy pasta with pancetta and Parmesan cheese",
        price: 12.99,
        image: "vite.svg",
      },
      {
        item: "Margherita Pizza",
        description: "Classic pizza with tomato sauce, mozzarella, and basil",
        price: 10.99,
        image: "vite.svg",
      },
      {
        item: "Grilled Chicken Salad",
        description:
          "Fresh greens with grilled chicken, cherry tomatoes, and balsamic dressing",
        price: 8.99,
        image: "vite.svg",
      },
      {
        item: "Beef Burger",
        description: "Juicy beef patty with lettuce, tomato, and cheese on a bun",
        price: 9.99,
        image: "vite.svg",
      },
      {
        item: "Vegetable Stir-Fry",
        description: "Assorted vegetables stir-fried in a savory sauce",
        price: 11.99,
        image: "vite.svg",
      },
      {
        item: "Chocolate Brownie Sundae",
        description:
          "Warm chocolate brownie with vanilla ice cream and hot fudge",
        price: 6.99,
        image: "vite.svg",
      },
    ];
    const users = [
      { name: "Alice", age: 25, email: "alice@gmail.com" },
      { name: "Boby", age: 32, email: "bob@example.com" },
      { name: "Charlie", age: 22, email: "charlie@example.com" },
      { name: "David", age: 28, email: "david@example.com" },
      { name: "Eva", age: 35, email: "eva@example.com" },
    ];
    return (
      <>
        <Events />
        <br />
        <hr />
        <CityAccordians />
        <UserStaticTable users={users} />
        <br />
        <hr />
        <UserDynamicTable users={users} />
  
        <UserCards users={users} />
  
        <MenuItems restaurantMenu={restaurantMenu} />
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

  export default Props;