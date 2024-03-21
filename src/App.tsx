import ListGroup from "./components/6-Props";


function App(){
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  return <div><ListGroup items={items} heading={"Cities"}/></div>
}

export default App;