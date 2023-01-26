 
import './App.css';
import Nav from './Components/Navbar';
import Posts from './Pages/Posts';
import SinglePost from './Pages/SinglePost';

function App() {
  return (
    <div className="App">
     <Nav/>
     <Posts/>
     {/* <SinglePost/> */}
    </div>
  );
}

export default App;
