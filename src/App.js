import Header from "./components/Header";
import Footer from "./components/Footer";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "./components/Home"
import Detail from "./components/Detail"
import Create from "./components/Create";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
        <div className="maincontent">
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/create" element={<Create/>}/>
            <Route path="/detail/:id" element={<Detail/>}/>
          </Routes>
        </div>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
