import React from 'react';
import ReactDOM from 'react-dom';
import ListDemo from './ListDemo';




ReactDOM.render(<ListDemo />, document.getElementById('root'));


// Questions:
// 1.Keys are needed to help telling react which values are changed
// 2. If you do not have an ID to use as key, you can use the value.toString() or 
//    the key can just be the index of the object in the array.
// 3. Props are values given to the component. These will not change. 
//    state is a list of memorized values, that if changed will re-render on the page.
// 4. I would use props when i get values that i need to work further with. Like a base.
//    I would use state when i need to render values as they change, and update values in my component.
// 5. this.state can only be set in the constructor.
// 6. To set states other places i have to refer back to a former state. i.e. this.state.name = "jonas".
