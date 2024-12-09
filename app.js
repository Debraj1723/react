import React from "react";
import ReactDOM from "react-dom/client"

const root = ReactDOM.createRoot(document.getElementById("root"));

const heading = React.createElement(
  "h1",
  { id: "heading", class: "red" },
  "Hello world from React!"
);

console.log(heading);
root.render(heading);

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "sdfsdf"),
    React.createElement("h2", {}, "sdfsdf"),
  ])
);

root.render(parent);
