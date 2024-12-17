
import {useContext} from "react";
import {Customer} from "../model/customer.ts";
import {CustomerContext} from "../component/CustomerProvider.tsx";

export function Dashboard() {

    const [customers, setCustomers] = useContext(CustomerContext);
    return (
        <>
            Dashboard
            {customers.map((customer: Customer) => (<div key={customer.email}>{customer.name + ' '+ customer.email + ' '+ customer.phone }</div>))}
        </>
    );
}
