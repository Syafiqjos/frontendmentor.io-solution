import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Home from './views/Home';
import Footer from './components/Footer';
import './App.css';

const route = (
  <Route path="/" element={<Home />} />
);

function App() {
  return (
    <Router>
      <div className="App">
        <main>
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
