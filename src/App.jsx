import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./pages/Home";

function App() {
  return (
    <div className="flex min-h-screen w-screen min-h-screen w-full bg-gradient-to-b from-neutral-50 to-neutral-100 dark:from-neutral-950 dark:to-neutral-900">
      <Sidebar />
      <div className="flex-grow">
        <Home />
      </div>
    </div>
  );
}

export default App;
