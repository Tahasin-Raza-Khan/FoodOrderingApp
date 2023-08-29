import { Component } from "react";
// const About=()=>{
//     return (
//       <div className="about">
//         <h1>Welcome to Food Villa About us Section</h1>
//       </div>
//     )
// }

// export default About;

class About extends Component {
  constructor(props) {
    super(props);
    console.log("from constructor");
  }
  componentDidMount() {
    console.log("from component did mount");
  }

  render() {
    console.log("Rendering the component");
    return (
      <>
        <div className="about">
          <h1>Welcome to Food Villa About us Section</h1>
        </div>
      </>
    );
  }
}

export default About;
