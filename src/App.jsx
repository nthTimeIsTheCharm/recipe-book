import './App.css'
import Navbar from "./components/Navbar" 
import Sidebar from './components/Sidebar'
import Footer from './components/Footer' 
import CardContainer from './components/CardContainer'

function App() {

  return (
    <>
      <Navbar />
      <main>
        <Sidebar />
        <CardContainer />
      </main>
      <Footer />
    </>
  );
}

export default App;
