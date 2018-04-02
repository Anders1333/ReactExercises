import React, { Component } from 'react';






// function NumberList(props) {
//     const numbers = props.numbers;
//     const listItems = numbers.map((number) =>
//       <li key={number.toString()}>{number}</li>
//     );
//     return (
//       <ul>{listItems}</ul>
//     );
//   }

// function NumberTable(props){
// const numbers = props.numbers;
// const tableItems = numbers.map((number) =>
//      <tr>{number}</tr>
//  );
//  return (
//      <table>{tableItems}</table>
//  );
// }
function Cars(props){
    const cars = props.carsToUse;
    const carTable = cars.map((car) =>
    <tr>{car.make},{car.model},{car.year}</tr>
    
    
);
return (
    <table>
    {carTable}
    </table>
);
}
 
 
  class ListDemo extends Component {
    
    constructor(props){
    super();
    }
    render() {
    const cars =
    [{"id": 1,"make": "VW", "model": "Golf", "year": 1948},
    {"id": 2,"make": "VW", "model": "Golf", "year": 1988},
    {"id": 3,"make": "Opel", "model": "Corsa", "year": 1998},
    {"id": 4,"make": "Opel", "model": "Kadett", "year": 1978},
    {"id": 5,"make": "Opel", "model": "Kadett", "year": 1991},
    {"id": 6,"make": "VW", "model": "UP", "year": 2008},
    {"id": 7,"make": "Opel", "model": "Corsa", "year": 2011},
    {"id": 8,"make": "Saab", "model":"Sonett", "year": 1965},
    {"id": 9,"make": "VW", "model":"UP", "year": 2004},
    {"id": 10,"make": "VW", "model":"Passat", "year": 2006},
    {"id": 11,"make": "Audi", "model":"A6", "year": 2008},
    {"id": 12,"make": "Saab", "model":"Sonett", "year": 2006},
    {"id": 13,"make": "Volvo", "model":"S90", "year": 2001},
    {"id": 14,"make": "Audi", "model":"A6", "year": 1999},
    {"id": 15,"make": "Volvo", "model":"S60", "year": 2011},
    {"id": 16,"make": "Audi", "model": "A3", "year": 2002}
    ]
    return (
      <div>
      <p>List:</p>
      <Cars carsToUse = {cars}/>
      {/* <NumberList numbers= {this.state.array}/>
      <NumberTable numbers= {this.state.array}/> */}
      </div>
    );
  }
}

export default ListDemo;