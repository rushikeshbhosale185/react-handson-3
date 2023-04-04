import { Component } from "react";

class Display extends Component {
  render() {
    return (
      <>
        {this.props.value.map((item, index) => {
          return (
            <h2 className="ui-define" key={index}>
              {" "}
              Name : {item.name} <br /> Department : {item.dept} <br /> Rating :{" "}
              {item.rate}
            </h2>
          );
        })}
        <button onClick={this.props.toggleFunc} className="back">
          {" "}
          Go Back{" "}
        </button>
      </>
    );
  }
}

export default Display;