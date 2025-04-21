// const heading = React.createElement('h1', {}, 'Hello World');
  

  const parent= React.createElement(
    "div",
     { id: "parent" },
    React.createElement("div", {id: "child"}, [React.createElement("h4", {}, "hello"),
    React.createElement("h2", {}, "I am a h2 tag"),
    React.createElement("h3", {}, "I am a h3 tag")
  ])
);
    const root = ReactDOM.createRoot(document.getElementById("root"));

    root.render(parent);