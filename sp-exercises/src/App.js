import React from 'react';
import upper from "./dataStore1";
import {text1, text2, text3} from "./dataStore1";
import personData from "./dataStore2";

var person = personData;


class App extends React.Component{
  render() {  
    
    return (
      <div>
       <p>{text1}</p>
       <p>{upper("hejmeddig")}</p>

       <p>Here comes the text</p>
       <p>{person.firstName}</p>
       <p>{person.email}</p>
        
      </div>
    );
  }
}

export default App;
