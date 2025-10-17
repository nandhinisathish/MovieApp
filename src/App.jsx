import "./App.css";

const Card = () => {
  return (
    <div>
      <h2>Card</h2>
    </div>
  )
}

const FunctionalComponent = () => {
  return (
    <div>
      <h2>Functional component</h2>
    </div>
  )
}

function App() {
  return (
    <>
      <FunctionalComponent />
      <Card />
      <Card />
      <Card />
    </>
  )
}

export default App;
