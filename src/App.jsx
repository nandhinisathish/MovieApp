import "./App.css";

const Card = ({title, rating}) => {
  return (
    <div className="card">
      <h2>{title}</h2>
      <h2>{rating}</h2>
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
      <Card title = {"Avatar"} rating = { 5}/>
      <Card title = {"Avenger"} rating = { 4}/>
      <Card title = {"Spicy"} rating = { 3}/>
    </>
  )
}

export default App;
