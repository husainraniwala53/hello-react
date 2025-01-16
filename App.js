const heading = React.createElement(
  "div",
  { id: "parent" },[
    React.createElement("div", { id: "child" }, [
        React.createElement("h1", { id: "heading" }, "this is H1 heading"),
        React.createElement("h1", { id: "heading" }, "this is H1 heading"),
      ]),
      React.createElement("div", { id: "child" }, [
        React.createElement("h1", { id: "heading" }, "this is H1 heading"),
        React.createElement("h1", { id: "heading" }, "this is H1 heading"),
      ])
]
); // First create heading

console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("root")); // create Dom root

root.render(heading); // pass heading to root using render