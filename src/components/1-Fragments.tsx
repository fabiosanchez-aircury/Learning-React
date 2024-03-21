import { Fragment } from "react/jsx-runtime";


function ListGroup() {
 return (
   // With a fragment we're not going to have an additional element like a div in the DOM
   //If we add empty brackets we're telling react to use a fragment
   <>
     <h1>List</h1>
     <ul className="list-group">
       <li className="list-group-item">Cras justo odio</li>
       <li className="list-group-item">Dapibus ac facilisis in</li>
       <li className="list-group-item">Morbi leo risus</li>
       <li className="list-group-item">Porta ac consectetur ac</li>
       <li className="list-group-item">Vestibulum at eros</li>
     </ul>
   </>
 );
}


export default ListGroup;
