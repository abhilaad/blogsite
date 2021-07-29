import "./App.css";
import TextPage from "./components/TextPage/TextPage";
import {BrowserRouter,Route} from 'react-router-dom'
import HomePage from "./components/HomePage"
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import VideoPage from "./components/VideoPage/VideoPage";
import GalleryPage from "./components/GalleryPage/GalleryPage";

function App() {
  return (
    <div className="App">
       
      <BrowserRouter>
      <div>
      <Navbar />
      <Route path="/" exact component={HomePage} />
      <Route path="/textblog" component={TextPage} />
      <Route path="/videoblog" component={VideoPage} />
      <Route path="/galleryblog" component={GalleryPage} />
      <Footer />
      </div>
  
      </BrowserRouter>         
     
    </div>
  );
}

export default App;
