import React from "react";

export default class Child extends React.Component {

  handleClick = () => {
    this.props.handleRating(10)

  }



  render() {
    console.log(this.props.comments);
    return (
      <div>
        <h1>Comments</h1>
        {this.props.comments.map((comment, index) => {
          return (
            <div key={index}>{comment}</div>
          )
        })}
        <button onClick={this.handleClick}>Update Parent</button>
      </div>
    );
  }
}
