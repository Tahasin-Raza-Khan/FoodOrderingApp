import { Component } from "react";
import Child from './Child'

class Test extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <h1>Class based componet Test</h1>
        <Child/>
      </>
    );
  }
}

export default Test;
