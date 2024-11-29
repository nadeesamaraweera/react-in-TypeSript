import './App.css'
import ButtonComponent from "./assets/components/ButtonComponent.tsx";

function App() {

    // const count = 10;

  return (
      <>
          {/*<p>{count}</p>*/}
          <ButtonComponent name = "Add"></ButtonComponent>
          <ButtonComponent name = "Update"></ButtonComponent>
          <ButtonComponent name = "Delete"></ButtonComponent>

      </>
  )
}

export default App
