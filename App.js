//const heading = React.createElement("h1" ,{ id: "test"}, "This is react example");
const Heading = React.createElement("div" , {id:"parent"},

[React.createElement("div" , {id:"child"}, [React.createElement("h1" , {} ,"Html 1 tag"), React.createElement("h1" , {} ,"Html 1 tag")]),
React.createElement("div" , {id:"child"}, [React.createElement("h1" , {} ,"Html 2 tag"), React.createElement("h1" , {} ,"Html 2 tag")])
]);

console.log(Heading);

const root = ReactDOM.createRoot(document.getElementById("root"));
 root.render(Heading);
