import React, { Component } from 'react';
import PersonStore from './PersonStore';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

handleChange(event) {
  this.setState({value: event.target.value});
}

  handleSubmit(event) {
    alert('A name was submitted: '+ this.state.value);
    AddPerson(this.state.value);
    event.preventDefault();
  }

  render() {
    return (

      <div>
         <h1>List of all persons:</h1>
          <ul><GetAllPersons /></ul>
          <form onSubmit = {this.handleSubmit}>
          <label>
           Name:
                <input type="text" name="name" value={this.state.value} onChange={this.handleChange}  />
          </label>
                <input type="submit" value="Submit" />
            </form>
      </div>
    );
  }
}
function GetAllPersons(){
  return PersonStore.getPersonList();
}
function AddPerson(props){
PersonStore.addPerson(props.name);
}

export default App;
