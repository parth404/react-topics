// const heading = React.createElement(
//   "h1",
//   { id: "heading", style: { color: "red" } },
//   "Hello World from React"
// );
// creating nested elements
const parent = React.createElement("div", {
    id: "parent"
}, React.createElement("div", {
    id: "child"
}, [
    React.createElement("h1", {
        key: "1"
    }, "I am H1 tag"),
    React.createElement("h2", {
        key: "2"
    }, "I am H2 tag")
]));
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

//# sourceMappingURL=index.6bd02f5a.js.map
