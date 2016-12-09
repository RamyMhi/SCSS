"use strict";

var Pan = React.createClass({
  displayName: "Pan",

  render: function render() {
    return React.createElement(
      "div",
      null,
      React.createElement(
        "div",
        { className: "little-panel" },
        "little Panel"
      ),
      React.createElement(
        "div",
        { className: "big-panel" },
        "big panel"
      )
    );
  }
});
ReactDOM.render(React.createElement(Pan, null), document.getElementById("container"));