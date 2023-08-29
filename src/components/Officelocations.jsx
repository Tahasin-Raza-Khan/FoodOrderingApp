import { Component } from "react";
//  const Officelocations=({city,country})=>{
//     return (
//         <div>
//             <h1>List of Office Locations we have !!!</h1>
//             <ul><li>{city}</li></ul>
//             <h2>Country-{country}</h2>
//         </div>
//     )
// }
//  export default Officelocations;

/// CLASS BASED COMPONENT TEST

class Officelocations extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    console.log("caling from constructor");
  }

  render() {
    console.log("render from class render method");
    const { count } = this.state;
    return (
      <div>
        <h1>List of Office Locations we have !!!</h1>
        <ul>
          <li>{this.props.city}</li>
          <li>{count}</li>
          <li>
            <button
              onClick={() => {
                this.setState({
                  count: 756,
                });
              }}
            >
              TEST CLASS BASED STATE
            </button>
          </li>
        </ul>
      </div>
    );
  }
}
export default Officelocations;
