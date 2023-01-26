import "./App.css";
import Nav from "./Components/Navbar";
import AllRoutes from "./Pages/AllRoutes";
import Posts from "./Pages/Posts";
import SinglePost from "./Pages/SinglePost";

function App() {
  return (
    <div className="App">
      <Nav />
      <AllRoutes />
    </div>
  );
}

export default App;
