import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Home from './views/Home';
import Footer from './components/Footer';

const route = (
  <Route path="/" element={<Home />} />
);

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <main className="grow">
          <Routes>
            {route}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
