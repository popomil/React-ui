
import './App.css';
import Main from './compoenent/Main';
import Header from './compoenent/Header';
import Footer from './compoenent/Footer';
import Test from './compoenent/Test';
import Error from './compoenent/Error';
import Home from './compoenent/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  // const forHeader = () =>{
  //   if(window.location.pathname == '/Header'){
  //     return  <Header/>
  //   }
  // }
  // const forFooter = () => {
  //   if(window.location.pathname == '/Footer'){
  //     return <Footer />

  //   }
  return (
    <div className="App">
      <>
      <Main/>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/header" element={  <Header/>} />
        <Route path="/footer" element={  <Footer/>} />
        <Route path="/test" element={  <Test/>} />
        <Route path="*" element={<Error/>}/>
        </Routes>
      </BrowserRouter>
      </>
      


    </div>
  );
}

export default App;
