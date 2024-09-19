import './App.css';
import Carousel from './Carousel/Carousel.jsx';
import ListingPage from './Components/ListingPage/ListingPage.jsx';
import Navbar from './Navbar/Navigation.jsx';
import Widgets from "./widgets/Widgets.jsx";

function App() {
  return (
    <div className="App">
      <Navbar/>
      {/* <Carousel/>
      <Widgets/> */}
      <ListingPage></ListingPage>
    </div>
  );
}

export default App;
