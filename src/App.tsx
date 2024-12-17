
// import {ButtonComponent} from "./assets/components/ButtonComponent.tsx";
// import {Customer} from "./customer.ts";
// // import {  useState} from "react";
// import {createBrowserRouter, RouterProvider} from "react-router";
// import {AddCustomer} from "./pages/AddCustomer.tsx";
// import {Dashboard} from "./pages/Dashboard.tsx";
// import {DeleteCustomer} from "./pages/DeleteCustomer.tsx";
// import {UpdateCustomer} from "./pages/UpdateCustomer.tsx";
// import {RootLayout} from "./component/RootLayout.tsx";
// import {CustomerProvider} from "./component/CustomerProvider.tsx";
// import Subject from "./assets/components/Subject.tsx";
// import {Item} from "./assets/components/Item.tsx";
// import {itemList} from "./items.ts";
// import ButtonComponent from "./assets/components/ButtonComponent.tsx";
// import {Dashboard} from "./assets/components/Dashboard.tsx";
// import {Login} from "./assets/components/Login.tsx";

import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router";
import {Dashboard} from "./pages/Dashboard.tsx";
import {AddCustomer} from "./pages/AddCustomer.tsx";
import {UpdateCustomer} from "./pages/UpdateCustomer.tsx";
import {DeleteCustomer} from "./pages/DeleteCustomer.tsx";
import {RootLayout} from "./component/RootLayout.tsx";
import {CustomerProvider} from "./component/CustomerProvider.tsx";

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

    // const [content,setContent] = useState('default');
    //
    // const handleClick = (name : string) => {
    //     let desc;
    //     subjects.map((subject)=>{
    //         if(subject.sName === name) {
    //             desc = subject.sDesc;
    //         }
    //     })
    //     setContent(name);
    //     alert(desc)
    // }

    // const subjects=[
    //     {
    //         sName : "RAD",
    //         sDesc : "Lorem Ipsum RAD",
    //     },
    //     {
    //         sName : "JS",
    //         sDesc : "Lorem Ipsum JS",
    //     },
    //     {
    //         sName : "CSS",
    //         sDesc : "Lorem Ipsum CSS",
    //     }
    // ]

    // const [count, setCount] = useState(0);

    //2024/12/13

    // const [names,setNames] = useState({
    //     firstName: "John",
    //     lastName: "Doe",
    //
    // });
    //
    // const [firstName,setFirstName] = useState('');
    // const [lastName,setLastName] = useState('');
    //
    // function handleNameChange() {
    //     setNames({
    //         ...names,
    //         firstName: firstName,
    //         lastName: lastName,
    //     })
    // }

    // const [customers, setCustomers] = useState<Customer[]>([])
    //
    // const [name, setName] = useState('')
    // const [email, setEmail] = useState('')
    // const [phone, setPhone] = useState('')
    // const [address, setAddress] = useState('')
    //
    // function addCustomers(){
    //     const newCustomer = new Customer(name, email, phone, address);
    //     setCustomers((customers) => [...customers, newCustomer]);
    // }
    // function deleteCustomers() {
    //     setCustomers((customers) => customers.slice(0,-1));
    // }
    //
    // function deleteByEmail() {
    //     setCustomers((customers) => customers.filter((customer) => customer.email !== email));
    // }
    //
    // function updateCustomers() {
    //     setCustomers((customers) => customers.map((customer) => customer.email === email?{...customers,name:name,address:address,phone:phone,email:email}:customer));
    // }

    const routes = createBrowserRouter([
        {
            path: '',
            element : <RootLayout/>,
            children : [
                { path : '', element : <Dashboard/>},
                { path : '/add', element : <AddCustomer/>},
                { path : '/delete', element : <DeleteCustomer/>},
                { path : '/update', element : <UpdateCustomer/>}
            ]
        },
    ])



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

            {/*<ButtonComponent onselect = {handleClick}>Dashboard</ButtonComponent>*/}
            {/*<ButtonComponent onselect= {handleClick}>Add Customer</ButtonComponent>*/}
            {/*<ButtonComponent onselect= {handleClick}>Delete Customer</ButtonComponent>*/}

            {/*<ButtonComponent onselect = {handleClick}>{subjects[0].sName}</ButtonComponent>*/}
            {/*<ButtonComponent onselect = {handleClick}>{subjects[1].sName}</ButtonComponent>*/}
            {/*<ButtonComponent onselect = {handleClick}>{subjects[2].sName}</ButtonComponent>*/}


            {/*<br/>*/}
            {/*    {content}*/}
            {/*{count}<br/>*/}
            {/*<button onClick={() => {setCount(count + 1)}}>Add</button>*/}
            {/*<button onClick={() => {setCount(count - 1)}}>Sub</button>*/}

            {/*<div className="App">*/}
            {/*    <h1>{count}</h1>*/}
            {/*    <ButtonComponent count={count} myClick={setCount}>Add</ButtonComponent>*/}
            {/*    <ButtonComponent count={count} myClick={setCount}>Subtract</ButtonComponent>*/}
            {/*</div>*/}


            {/*2024/12/13*/}



            {/*    <input name="firstName" type="text" placeholder="First Name" onChange={(e)=>setFirstName(e.target.value)}></input>*/}
            {/*    <input name="lastName"  type="text" placeholder="Last Name" onChange={(e)=>setLastName(e.target.value)}></input>*/}

            {/*    <button onClick={handleNameChange}>Display</button>*/}

            {/*<br/>*/}
            {/*{names.firstName + " " + names.lastName}*/}

            {/*<input name='Name' type="text" placeholder='Name' onChange={(e) => setName(e.target.value)}/>*/}
            {/*<input name='Address' type="text" placeholder='Address' onChange={(e) => setAddress(e.target.value)}/>*/}
            {/*<input name='Email' type="text" placeholder='Email' onChange={(e) => setEmail(e.target.value)}/>*/}
            {/*<input name='Phone' type="text" placeholder='Phone' onChange={(e) => setPhone(e.target.value)}/>*/}
            {/*<br/>*/}
            {/*<button onClick={addCustomers}>Add</button>*/}
            {/*<button onClick={deleteCustomers}>Delete</button>*/}
            {/*<button onClick={deleteByEmail}>Delete by Email</button>*/}
            {/*<button onClick={updateCustomers}>Update Customer</button>*/}

            {/*{customers.map((customer) => (*/}
            {/*    <div key={customer.email}>*/}
            {/*        {customer.name} {customer.address} {customer.email} {customer.phone}*/}
            {/*    </div>*/}
            {/*))}*/}

            <>
                <CustomerProvider>
                    <RouterProvider router={routes} />
                </CustomerProvider>
            </>
        </>
    )
}

export default App


