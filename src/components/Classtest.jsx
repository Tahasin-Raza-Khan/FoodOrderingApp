import {Component} from "react";
import Officelocations from './Officelocations'
class Classtest extends Component {
  render(){
     return <>
      <h1>This is from class based Component</h1>
      <div>
        <Officelocations city={"Dhanbad"} country="india" age="452"/>
      </div>
     </>
  }
}
export default Classtest;