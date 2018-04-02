import React from 'react';
import ReactDOM from 'react-dom';
import App2 from "./App2";
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Clock from "./Clock";
import Toggle from "./Toggle";


//-------------Renders--------------------------//
// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );
// ReactDOM.render(
//     <App2 />,
//     document.getElementById('root')
//   );

// ReactDOM.render(<Clock delay="5000" message="This is a clock that updates every 2 seconds" />, document.getElementById('root'));
ReactDOM.render(<Toggle />,document.getElementById('root'));



// ------------------ Questions -----------------//
//   1 : A functional component is a component that runs
//         a function. Like a method in Java.
//     2 : A class component enables us to have states. So that
//         we can call "this." and get an instance of a variable.
//     3 : Props seems like a "box" that can contain anything. So a function can 
//         pick up the props value for prop.name, If the props name value is given from
//         where the function is called.
//     4 : example :  function Goodnight (props){
//                    return <p>Goodnight, {props.name}</p>    }
//     5 : example : <Goodnight name="Anders"/>   

//     6 : I dont think so. It would be hard to turn the clock into
//         a function. Because it uses states to work. Impossible in fact.
 
//     7 : State is set in the constructor to be the current date. And is later
//         set with the feature setState to be the current date again. Thereby
//         updating the clocks timer. 

//     8 : React does not need to be told to update anything. If you make a loop
//         that changes a value that is already rendered, it is automatically updated.

//     9 : Props are fixed and states are changeable. 

//    10 : They are passed through the constructor and has a 
//         obligatory "super(props)" declaration.

//    11 : Life cycle methods are used to run different functions and changes
//         whether or not the components is mounted, will mount, will unmount etc.
  
//    12 : The lifecyclemethods are pretty self-explanatory. It should be noted that the constructed
//         and mount methods are only displayed once. Where render and update methods seems to be methods 
//         that will be used many times during the components lifecycle. We only construct and mount once, 
//         but we update and render all the time. 
//    13 : The button now gives an error message instead. It says it cannot read
//         the property "setState".
//    14 : It seems like the line is used to bind the event of clicking the button, to the class. Before
//         we edit the class we do not call the HandleClick() method. So instead we save the event by using "this".
//    15 : We should be able to use  e.preventDefault(); on the event.
//    16 : Arrow functions are used in this example to assign the handleclick function to be an arrow function.
//         Arrow functions does not bind "this". Meaning "this" keeps its meaning from its original
//         context. Meaning the function can change the according state through this.setState(opposite state).