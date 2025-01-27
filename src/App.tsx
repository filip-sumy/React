import Button from "./components/Button"

function App() {

  const handleButtonClick = () => {
    console.log("Click");
  };

  return (
    <div>
      <Button label="Click"></Button>
      <Button label="Press it" ></Button>
      <Button onButtonClick = {handleButtonClick} />
    </div>
  );
}

export default App;
