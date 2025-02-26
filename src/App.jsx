import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./pages/Home";

function App() {
  return (
    <div className="flex h-screen w-full  bg-gradient-to-b from-neutral-50 to-neutral-100">
      <Sidebar />
      <div className="flex-grow">
        <Home />
      </div>
    </div>
  );
}

export default App;
