// ----------1------------------
// export  default function ButtonComponent(props: {name : string}) {
//     return (
//         <>
//             <button>{props.name}</button>
//         </>
//     )
// }

// ----------2------------------
import {ReactNode} from "react";

export  default function ButtonComponent(props: {children : ReactNode}) {
    return (
        <>
            <button>{props.children}</button>
        </>
    )
}

