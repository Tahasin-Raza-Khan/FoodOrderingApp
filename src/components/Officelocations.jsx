import { Component } from "react";
class Officelocations extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  render() {
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
