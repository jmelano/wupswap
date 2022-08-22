import logo from './logo.svg';
import './App.css';


import { Nav } from "./components/Nav";
import { Home } from "./pages/Home";

function App() {
  return (
    <div className="bg-stone-100 flex flex-col overflow-y-scroll h-screen">
      <Nav />
      <Home />
    </div>
  );
}

export default App;
