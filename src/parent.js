import React from 'react';
import Child from './child';

class Parent extends React.Component {
  
  state = {
	msg: "hi"  
  }
  change(e) {
	  //alert('hh'); 
	  e.preventDefault();
	  this.setState({
					msg: 'harsingsssddd'
					})
  }
  
  render() {
	  console.log("parent render");
  return (
    <div className="App">
      Parent
	  <Child msg={this.state.msg} />
	  <button onClick={this.change.bind(this)}>Change</button>
    </div>
  );
}
componentDidMount() {
	console.log("parent mount");
}
}

export default Parent;
