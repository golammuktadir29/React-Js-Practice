import { Component } from "react";

class Clock extends Component {
  state = {
    time: new Date(),
    locale: "en-US",
  };

  componentDidMount() {
    this.timerId = setInterval(() => {
      this.setState({ time: new Date() });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  handleChange = (locale) => {
    this.setState({
      locale: locale,
    });
  };

  render() {
    let button;

    const { time, locale } = this.state;
    if (locale === "en-US") {
      button = (
        <button onClick={() => this.handleChange("bn-BD")}>
          Click To change
        </button>
      );
    } else {
      button = (
        <button onClick={() => this.handleChange("en-US")}>
          ঘড়ি পরিবর্তন করুন
        </button>
      );
    }
    return (
      <>
        <h1>
          {locale === "en-US" ? "Time is :" : "সময় : "}{" "}
          {time.toLocaleString(locale)}
        </h1>
        {button}
      </>
    );
  }
}

export default Clock;
