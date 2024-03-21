import { useState } from "react";


function ListGroup() {
 let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];


 // Hook
 // Using the state hook we can tell react that this component can have data or state that will change over time
 //arr[0] // variable (selectedIndex)
 //arr[1] // updater function
 const [selectedIndex, setSelectedIndex] = useState(-1);


 const getMessage = () => {
   return items.length === 0 ? <p>No items found</p> : null
 }


 return (
   <>
     <h1>List</h1>
     {getMessage()}
     <ul className="list-group">
       {items.map((item, index) => (
         <li key={item} className={selectedIndex === index ? 'list-group-item active' : 'list-group-item'} onClick={() => {setSelectedIndex(index);}}>{item}</li>
       ))}
     </ul>
   </>
 );
}


export default ListGroup;