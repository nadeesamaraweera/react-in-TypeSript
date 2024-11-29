import './App.css'
import ButtonComponent from "./assets/components/ButtonComponent.tsx";
// import Subject from "./assets/components/Subject.tsx";
// import {Item} from "./assets/components/Item.tsx";
// import {itemList} from "./items.ts";
// import ButtonComponent from "./assets/components/ButtonComponent.tsx";
// import {Dashboard} from "./assets/components/Dashboard.tsx";
// import {Login} from "./assets/components/Login.tsx";

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

    // const isLoggedIn =true;
    //
    // let content;
    //
    // if (isLoggedIn) {
    //     content = <Dashboard/>
    // }else {
    //     content = <Login/>;
    // }

    const handleClick = (name: string) => {
        alert(name + "clicked!")
    }

    return (
      <>
          {/*<p>{count}</p>*/}
          {/*<ButtonComponent>Click Me</ButtonComponent>*/}
          {/*<ButtonComponent>Click Me1</ButtonComponent>*/}
          {/*<ButtonComponent>Click Me2</ButtonComponent>*/}
          {/*<Item title={itemList[0].title} description={itemList[0].description}></Item>*/}
          {/*<Item title={itemList[1].title} description={itemList[1].description}></Item>*/}
          {/*<Item title={itemList[2].title} description={itemList[2].description}></Item>*/}

          {/*{content}*/}
          {/*<Subject name= "RAD">*/}
          {/*    Lorem Ipsum is simply dummy text of the printing.*/}
          {/*</Subject>*/}
          {/*<Subject name= "MAD">*/}
          {/*    Lorem Ipsum is simply dummy text of the printing.*/}
          {/*</Subject>*/}
          {/*<Subject name= "OOP">*/}
          {/*    Lorem Ipsum is simply dummy text of the printing.*/}
          {/*</Subject>*/}

          <ButtonComponent onselect = {handleClick}>Dashboard</ButtonComponent>
          <ButtonComponent onselect= {handleClick}>Add Customer</ButtonComponent>
          <ButtonComponent onselect= {handleClick}>Delete Customer</ButtonComponent>


      </>

  )
}

export default App


