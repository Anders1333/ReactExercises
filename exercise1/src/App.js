import React, { Component } from 'react';
 
import upper, {text1,text2, text3} from "./dataStore";
import defaultPerson from "./dataStore2";

var Person = defaultPerson;
 


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <h1 className="App-title">Welcome to React</h1>
        </header>
        <p>her starter text</p>
        <p>{text1}</p>
        <p>{text2}</p>
        <p>{text3}</p>
        <p>{upper("uppercaseThis")}</p>
        <p>{Person.firstName}{Person.email}</p>

       
        <p>hej</p>

      
      </div>
    );
  }
}

export default App;
