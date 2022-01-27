import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./views/Home";
import Footer from "./components/Footer";

const route = <Route path="/" element={<Home />} />;

function App() {
	return (
		<Router>
			<div className="min-h-screen flex flex-col">
				<main className="flex grow items-center justify-center bg-neutral-very-dark-blue">
					<Routes>{route}</Routes>
				</main>
				<Footer />
			</div>
		</Router>
	);
}

export default App;
