import React, { Component } from 'react';
import JokeStore from './JokeStore';





// Mit event.preventDefault virker ikke. Så jeg kan ikke teste 
// om mine jokes bliver sat ind...  : /
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    
  }

  handleSubmit(event) {
   
    JokeStore.addJoke(this.event.value);
    event.preventDefault();

  }
  render() {
    return (
        <div>
         <form onSubmit={this.handleSubmit}>
          <label>
            Add Joke :
            <textarea />
          </label>
          <input type="submit" value="Submit" />
        </form>
       
       <div>
         <h1> All jokes:</h1>
         <ul>
           {JokeStore.getAlljokes()}
           </ul>
         </div>
         </div>
    );
  }
}

export default App;

//----------------------------------------------------------------//



 


