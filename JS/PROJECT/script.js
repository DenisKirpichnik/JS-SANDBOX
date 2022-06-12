const nodes = document.getElementsByClassName("btn");

for (let i = 0; i < nodes.length; i++) {
	nodes[i].addEventListener("click", function () {
		console.log("Element #" + i);
	});
}
a;

// import React from "react"
// import "./styles.css";

// export default function App() {
//   const [count, setCount] = React.useState(3)

//   React.useEffect(() => {
//     setInterval(() => {
//       setCount(count - 1)
//     }, 1000)
//   }, [])

//   return (
//     <div className="App">
//       <h1>Hello CodeSandbox</h1>
//       <h2>Start editing to see some magic happen!</h2>
//     </div>
//   );
// }
