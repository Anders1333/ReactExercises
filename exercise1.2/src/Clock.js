import React from "react";

class Clock extends React.Component {
    constructor(props) {
      super(props);
      this.state = {date: new Date()};
      this.delay = props.delay;
      this.message = props.message;
      console.log("Component is constructed..");
    }
    tick() {
        this.setState({
          date: new Date()
        });
      }

    componentWillMount(){
      console.log("Component will mount..")
    }
    componentDidMount() {
        console.log("Component was mounted..");
            this.timerID = setInterval(
              () => this.tick(),
               this.delay
            );
        }
    
    
  
    componentWillUnmount() {
     console.log("Component will mount..");
    }
  
    componentWillUpdate(){
      console.log("Component will update..");
    }

    componentDidUpdate(){
      console.log("Component was updated..")
    }
    render() {
      console.log("Component was rendered..");
      return (
        <div>
          <h1>{this.message}</h1>
          <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        </div>
      );
    }
  }
  export default Clock;