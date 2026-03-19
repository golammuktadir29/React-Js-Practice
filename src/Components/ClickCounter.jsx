// import { Component } from "react";

// export default class ClickCounter extends Component {
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
//         <button type="button" onClick={this.handleCount}>
//           Clicked {count} times.
//         </button>
//       </>
//     );
//   }
// }
import withCounter from "./HOC/withCounter";

// eslint-disable-next-line react-refresh/only-export-components
const ClickCounter = (props) => {
  const { count, handleCount } = props;
  // console.log(count, handleCount);
  return (
    <>
      <button type="button" onClick={handleCount}>
        Clicked {count} times.
      </button>
    </>
  );
};
// eslint-disable-next-line react-refresh/only-export-components
export default withCounter(ClickCounter);
