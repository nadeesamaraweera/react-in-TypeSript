import {ReactNode} from "react";
export default function Subject(props: { children:ReactNode, name: string }) {
    return(
        <>
            <h2>{props.name}</h2>
            <p>{props.children}</p>
        </>
    )
}