import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import Feed from "./components/feed/Feed";
import RightWidgets from "./components/rightWidgets/RightWidgets";

const App = () => {
  return (
    <div className="app">
      <Sidebar />
      <Feed />
      <RightWidgets />
    </div>
  );
};

export default App;
