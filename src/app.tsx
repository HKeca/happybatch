import * as React from "react";
import * as ReactDOM from "react-dom";

import Test from "./components/test";

class App extends React.Component {
  render() {
    return (
      <div>
        <Test />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
