// ----------1------------------
// export  default function ButtonComponent(props: {name : string}) {
//     return (
//         <>
//             <button>{props.name}</button>
//         </>
//     )
// }

// ----------2------------------
// import {ReactNode} from "react";

// const handleClick = () => {
//     alert("Click Me!");
// }

// import {ReactNode} from "react";

export function ButtonComponent(props) {
    const handleClick = () => {
        let newValue = props.count;

        if (props.children === 'Add') {
            newValue = newValue + 1;
        } else {
            newValue = newValue - 1;
        }
        props.myClick(newValue);
    }


    return (
        <>
            {/*<button>{props.children}</button>*/}
            {/*<button onClick={() =>props.onselect(props.children)}>{props.children}</button>*/}
            <button onClick={handleClick}>{props.children}</button>

        </>
    )
}

