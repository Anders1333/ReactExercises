import React, { Component } from 'react';




function Welcome(props) {
  return <h1>Hello, {props.name}, your email is {props.email}</h1>;
}

function App() {
  return (
    <div>
      <Welcome name="Sara" email="sara@sara.dk"   />
      <Welcome name="Cahal" />
      <Welcome name="Edite" />
    </div>
  );
}



export default App;

