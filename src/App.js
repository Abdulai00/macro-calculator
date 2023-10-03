import './App.css';

const Person = (props) => {
  return (
    <>
    <h1>Name: {props.name}</h1>
    </>
  )
}


const App = () => {
  return (
    <div className="App">
      <h1>hello world</h1>
      <Person name = {'abdulai'}/>
       
    </div>
  );
}

export default App;
