import logo from './logo.svg';
import './App.css';


import { Nav } from "./components/Nav";
import { Home } from "./pages/Home";

function App() {
  return (
    <div className="bg-hero-pattern flex flex-col overflow-y-scroll h-screen font-press-start">
      <Nav />
      <Home />
    </div>
  );
}

export default App;
