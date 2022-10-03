import "./App.css";

function App() {
  function handleSubmit(event) {
    event.preventDefault();
    alert(hi);
  }
  return (
    <div className="App">
      {" "}
      <div className="wrapper">
        <h1>How About Them Apples</h1>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <label>
              <p>Name</p>
              <input name="name" />
            </label>
          </fieldset>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default App;
