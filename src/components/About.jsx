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
    this.state = {
      info: {
        name: "Dummy Name",
        avatar_url:
          "https://media.licdn.com/dms/image/D5603AQHOLPLyTP32Zg/profile-displayphoto-shrink_400_400/0/1667314840272?e=1698883200&v=beta&t=aFhCq5uUzZbCKPwuPJKtqVY0_57uElZaD1RxtMfZKXE",
      },
    };
  }
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/Tahasin-Raza-Khan");
    const json = await data.json();
    this.setState({
      info: json,
    });
  }
  componentDidUpdate() {
  }
  componentWillUnmount() {
  }
  render() {
    const { avatar_url, name } = this.state.info;
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
