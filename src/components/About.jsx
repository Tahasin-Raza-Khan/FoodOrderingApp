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
    this.state = {
      info: {
        name: "Dummy Name",
        avatar_url:
          "https://media.licdn.com/dms/image/D5603AQHOLPLyTP32Zg/profile-displayphoto-shrink_400_400/0/1667314840272?e=1698883200&v=beta&t=aFhCq5uUzZbCKPwuPJKtqVY0_57uElZaD1RxtMfZKXE",
      },
    };
  }
  async componentDidMount() {
    console.log("from component did mount");
    const data = await fetch("https://api.github.com/users/Tahasin-Raza-Khan");
    const json = await data.json();
    console.log("api data", json);
    this.setState({
      info: json,
    });
  }
  componentDidUpdate() {
    console.log("called after first rendering when the state changed");
  }
  componentWillUnmount() {
    console.log("About us conponent detroyed..");
  }
  render() {
    const { avatar_url, name } = this.state.info;
    console.log("Rendering the component");
    return (
      <>
        <div className="about">
          <h1>Welcome {name} </h1>
          <img src={avatar_url} alt="" />
        </div>
      </>
    );
  }
}

export default About;
