import React from 'react';

class Child extends React.Component {
  
  state = {
	  mm : this.props.msg
  }
  
 static getDerivedStateFromProps(props,state) {
	  //console.log(props);
	  return {mm : props.msg}
  }

  render() {
   console.log("child render");
  return (
    <div className="App">
      {this.state.mm}
    </div>
  );
}
componentDidMount() {
	console.log("child mount");
}
}
export default Child;
