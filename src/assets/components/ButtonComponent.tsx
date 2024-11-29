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

import {ReactNode} from "react";

export  default function ButtonComponent(props:{children:ReactNode,onselect:any}){
    return (
        <>
            {/*<button>{props.children}</button>*/}
            <button onClick={() =>props.onselect(props.children)}>{props.children}</button>
        </>
    )
}

