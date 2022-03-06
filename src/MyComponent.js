import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import React from "react";
import renderHTML from "react-render-html";

export default class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: "" }; // You can also pass a Quill Delta here
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value) {
    this.setState({ text: value });
    console.log(this.state.text);
  }

  render() {
    return (
      <>
        <ReactQuill value={this.state.text} onChange={this.handleChange} />
        {this.state.text}
        {/* {renderHTML(this.state.text)} */}
      </>
    );
  }
}
