import './App.css'
// import {Item} from "./assets/components/Item.tsx";
// import {itemList} from "./items.ts";
// import ButtonComponent from "./assets/components/ButtonComponent.tsx";
import {Dashboard} from "./assets/components/Dashboard.tsx";
import {Login} from "./assets/components/Login.tsx";

function App() {

    // const count = 10;
    // const itemList = [
    //     {
    //         title: "ABC",
    //         description: "This is a description",
    //     },
    //     {
    //         title: "DHI",
    //         description: "This is a description",
    //     },
    //     {
    //         title: "JKL",
    //         description: "This is a description",
    //     }
    // ]

    // const itemArray = [];
    //
    // for (const item of itemList) {
    //     itemArray.push(<Item title={item.title} description={item.description}></Item>);
    // }

    const isLoggedIn =true;

    let content;

    if (isLoggedIn) {
        content = <Dashboard/>
    }else {
        content = <Login/>;
    }


    return (
      <>
          {/*<p>{count}</p>*/}
          {/*<ButtonComponent name = "Add"></ButtonComponent>*/}
          {/*<ButtonComponent name = "Update"></ButtonComponent>*/}
          {/*<ButtonComponent name = "Delete"></ButtonComponent>*/}
          {/*<Item title={itemList[0].title} description={itemList[0].description}></Item>*/}
          {/*<Item title={itemList[1].title} description={itemList[1].description}></Item>*/}
          {/*<Item title={itemList[2].title} description={itemList[2].description}></Item>*/}

          {content}
      </>

  )
}

export default App


