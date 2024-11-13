import './App.css'
import Navbar from "./components/Navbar" 
import Sidebar from './components/Sidebar'
import CardContainer from "./components/CardContainer.jsx"
/* import Footer from './components/Footer' */

function App() {

  return (
    <>
      <Navbar />
      <main>
        <Sidebar />
        <CardContainer />
      </main>
      {/* <Footer /> */}
    </>
  );
}

export default App;
