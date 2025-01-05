import React from "react";
import ReactDOM from "react-dom/client";

const TitleComponent = () => (
  <h1 className="title" tabIndex="5">
    Namaste Debraj Basak
  </h1>
);

const title = (
  <h1 className="title" tabIndex="5">
    Namaste Debraj Basak
  </h1>
)

const HeadingComponent = () => (
  <div className="headingBody">
    {title}
    <h1 className="header2">Namaste React component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
