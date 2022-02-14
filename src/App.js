import logo from "./logo.svg";
import "./App.css";
import Layout from "./Layout";


// bootstrap을 적용하기위해 import 해주어야 됨
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
	return (
		<div className="App">
			<Layout/>
		</div>
	);
}

export default App;
