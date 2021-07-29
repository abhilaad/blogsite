import "./App.css";
import BodyLeft from "./components/BodyLeft";
import BodyRight from "./components/BodyRight";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      
      <Navbar />
      <div className="container my-3 my-sm-5">
        <div className="row">
        <div className="col-12 col-md-6 col-lg-8">
            <BodyLeft />
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <BodyRight />
           </div> 
        </div>
      </div>
      <Footer />
     
    </div>
  );
}

export default App;
