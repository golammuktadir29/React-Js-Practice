import { Component } from "react";

// export default class HoverCounter extends Component {
//   state = {
//     count: 0,
//   };

//   handleCount = () => {
//     this.setState((prevState) => ({ count: prevState.count + 1 }));
//   };

//   render() {
//     const { count } = this.state;
//     return (
//       <>
//         <h1 onMouseOver={this.handleCount}>Hovered {count} times.</h1>
//       </>
//     );
//   }
// }
import withCounter from "./HOC/withCounter";
// eslint-disable-next-line react-refresh/only-export-components
const HoverCounter = (props) => {
  const { count, handleCount } = props;
  return (
    <>
      <h1 onMouseOver={handleCount}>Hovered {count} times.</h1>
    </>
  );
};
// eslint-disable-next-line react-refresh/only-export-components
export default withCounter(HoverCounter);
