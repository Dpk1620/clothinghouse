import './App.css';
import Header from './components/Header'
import { Outlet } from "react-router-dom"
import Footer from './components/Footer';
function App() {
  return (
    <>
      <div style={{overflow:"hidden"}} >
        <Header />
        <main className='bg-green min-vh-100'>
          <Outlet />
        </main>
        <Footer/>
      </div>
    </>

  );
}

export default App;
