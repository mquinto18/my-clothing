import {
  Navbar, 
  Home, 
  AllTime, 
  Products, 
  Collections, 
  About, 
  Contacts,
  Footer
  } from "./components/Index"
import './components/Navbar/navbar.css'
function App() {
  return (
    <div className="font-Poppins">
        <Navbar/>
        <Home/>
        <AllTime/>
        <Products/>
        <Collections />
        <About/>
        <Contacts/>
        <Footer/>
    </div>
  );
}

export default App;
