// ----------1------------------
// export  default function ButtonComponent(props: {name : string}) {
//     return (
//         <>
//             <button>{props.name}</button>
//         </>
//     )
// }

// ----------2------------------
export  default function ButtonComponent({name}: {name : string}) {
    return (
        <>
            <button>{name}</button>
        </>
    )
}

