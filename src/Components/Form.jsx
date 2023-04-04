import { Component } from "react";
import Display from "./Display";

class Form extends Component {
  state = {
    name: "",
    dept: "",
    rate: "",
    clicked: true,
    data: [],
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  toggleFunction = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const ObjData = {
      name: this.state.name,
      dept: this.state.dept,
      rate: this.state.rate,
      click: this.state.clicked,
    };
    if (!ObjData.name || !ObjData.dept || !ObjData.rate || !ObjData.click) {
      alert("Please Fill up the Information in All Fields....!");
    } else {
      const arr = this.state.data;

      arr.push(ObjData);

      this.setState({ [this.state.data]: arr, clicked: false });
    }
  };

  render() {
    return (
      <>
        {this.state.clicked ? (
          <>
            <div className="container">
              <div className="header">
                <h1>EMPLOYEES FEEDBACK FORM</h1>
              </div>
              <div>
                <input
                  type="text"
                  required
                  placeholder="Enter Your Name"
                  name="name"
                  onChange={this.handleChange}
                />
              </div>
              <div>
                <input
                  type="text"
                  required
                  placeholder="Enter Your Department"
                  name="dept"
                  onChange={this.handleChange}
                />
              </div>
              <div>
                <input
                  type="number"
                  min={1}
                  max={5}
                  required
                  placeholder="Enter Your Rating"
                  name="rate"
                  onChange={this.handleChange}
                />
              </div>
              <button type="submit" onClick={this.handleSubmit}>
                Submit
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="flag">
              <h4>Filled data Information Display Here</h4>
              <Display
                value={this.state.data}
                toggleFunc={this.toggleFunction}
              />
            </div>
          </>
        )}
      </>
    );
  }
}

export default Form;
