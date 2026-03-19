import { Component } from "react";

// eslint-disable-next-line no-unused-vars
const withCounter = (OriginalComponent) => {
  class newComponent extends Component {
    state = {
      count: 0,
    };

    handleCount = () => {
      this.setState((prevState) => ({ count: prevState.count + 1 }));
    };

    render() {
      const { count } = this.state;
      return <OriginalComponent count={count} handleCount={this.handleCount} />;
    }
  }
  return newComponent;
};

// eslint-disable-next-line react-refresh/only-export-components
export default withCounter;
