import React,{component} from 'react';


class PersonStore{
    constructor(persons) {
        this.persons = persons; 
     }
     addPerson(person) {
       this.persons.push(person);
     }
    
     getPersonData(){
         return this.persons;
     }
     
     getPersonList(){
       return this.persons.map((person)=> <li>{person}</li>)
     }
    }
   
    let startPersons = [ 'Anders','Tove','Jens']
   
   export default new PersonStore(startPersons);


