import "./App.css";

const Card = ({ title, rating }) => {
  return (
    <div className="card">
      <h2>{title}</h2>
      <h2>{rating}</h2>
    </div>
  );
};

const DisplayInlineStyle = ({ title, rating }) => {
  return (
    <div
      className="card"
      style={{
        border: "1px solid #4b5362",
        padding: "20px",
        margin: "10px",
        minHeight: "100px",
        borderRadius: "8px",
        backgroundColor: "#31363f",
        color: "#f2f2f2",
        boxShadow: "5px 5px red",
      }}
    >
      <h2>{title}</h2>
      <h2>{rating}</h2>
    </div>
  );
};

const DisplayInlineStyleWithBoxShadowBlurred = ({ title, rating }) => {
  return (
    <div
      className="card"
      style={{
        border: "1px solid #4b5362",
        padding: "20px",
        margin: "10px",
        minHeight: "100px",
        borderRadius: "8px",
        backgroundColor: "#31363f",
        color: "#f2f2f2",
        boxShadow: "5px 5px 20px red", // 3rd value is for blur
      }}
    >
      <h2>{title}</h2>
      <h2>{rating}</h2>
    </div>
  );
};

const DisplayInlineStyleWithBoxShadowSpread = ({ title, rating }) => {
  return (
    <div
      className="card"
      style={{
        border: "1px solid #4b5362",
        padding: "20px",
        margin: "10px",
        minHeight: "100px",
        borderRadius: "8px",
        backgroundColor: "#31363f",
        color: "#f2f2f2",
        boxShadow: "5px 5px 5px 10px red", // 3rd value is for blur
      }}
    >
      <h2>{title}</h2>
      <h2>{rating}</h2>
    </div>
  );
};

const FunctionalComponent = () => {
  return (
    <div>
      <h2>Functional component</h2>
    </div>
  );
};

function App() {
  return (
    <>
      <FunctionalComponent />
      <Card title={"Avatar"} rating={5} />
      <Card title={"Avenger"} rating={4} />
      <Card title={"Spicy"} rating={3} />
      <DisplayInlineStyle
        title={"Display Inline Style which takes PRECDENCE of all other style."}
        rating={10}
      />
      <DisplayInlineStyleWithBoxShadowBlurred
        title={"Display Inline Style which takes PRECDENCE of all other style."}
        rating={10}
      />
      <DisplayInlineStyleWithBoxShadowSpread title={"Display Inline Style which takes PRECDENCE of all other style."}
        rating={10}
      />
    </>
  );
}

export default App;
