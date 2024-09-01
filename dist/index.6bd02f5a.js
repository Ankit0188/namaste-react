const parent = React.createElement("div", {
    id: "parent"
}, React.createElement("div", {
    id: "child1"
}, [
    React.createElement("h1", {}, "I'm H1 Tag,In Javascript from child1"),
    React.createElement("h2", {}, "I'm H2 Tag,In Javascript")
]), React.createElement("div", {
    id: "child2"
}, [
    React.createElement("h1", {}, "I'm H1 Tag,In Javascript from child2"),
    React.createElement("h2", {}, "I'm H2 Tag,In Javascript")
]));
console.log(parent); //object
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

//# sourceMappingURL=index.6bd02f5a.js.map
