import Controlled from "./components/Controlled";
import FetchDataComponent from "./components/FetchDataComponent";
import Uncontrolled from "./components/Uncontrolled";
function App() {

  return (
    // <>
    //   <Counter></Counter>
    //   <Greeting name={"world"}></Greeting>
    // </>
    <>
    <Controlled></Controlled>
    <Uncontrolled></Uncontrolled>
    <FetchDataComponent></FetchDataComponent>
    </>
  )
}

export default App;
