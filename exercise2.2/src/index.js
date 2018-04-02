import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import NameForm from './NameForm';
import EssayForm from './EssayForm';
import FlavorForm from './FlavorForm';
import Reservation from './Reservation';

ReactDOM.render(<App />, document.getElementById('root'));


// 1: We make sure the handleChange method is called in the onChange spec of the input.
//    We also make sure that this change is handled in respect to THIS, meaning we update the state value.
// 2: event.PreventDefault() is literally preventing the default process of the submit-event. Meaning we can 
//    control what happens when the control is handled, istead of the normal procedure.
// 3: The form would be submitted to the server and redirected to the corresponding address.
//    This will be revealed by a change in URL, which will now contain the submitted values.
// 4: If we submit traditionally we are changing the page.
// 5: I dont understand this question : /
// 6: Well a controlled component is a form whose input change is controlled by react. Meaning the State of the class
//    is considered the "single source of truth". While normally HTML elements as SELECT have their own state.