import React from "react";

class ClassComp extends React.Component {
  constructor(props) {
    super();
    console.log("will runs at 3rd");

    this.state = {
      count: 0,
    };
  }
  componentDidMount() {
    console.log("will run at 5th");
  }
  render() {
    console.log("will runs at 4th");
    const { count } = this.state;
    const { name } = this.props;
    return (
      <div>
        <div>{name}</div>
        <button
          onClick={() => {
            this.setState({ count: count - 1 });
          }}
        >
          Dec Count
        </button>
        <div>Count: {count}</div>
        <button
          onClick={() => {
            this.setState({ count: count + 1 });
          }}
        >
          Inc Count
        </button>
      </div>
    );
  }
}
export default ClassComp;
