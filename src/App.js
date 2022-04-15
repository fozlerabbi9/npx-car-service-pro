import { Route, Routes } from 'react-router-dom';
import './App.css';
import AboutUs from './ComponentsFile/AboutUsFile/AboutUs';
import Header from './ComponentsFile/SharedPage/HeaderFile/Header';
import Home from './ComponentsFile/HomeFile/Home';
import Footer from './ComponentsFile/SharedPage/FooterFile/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './ComponentsFile/LoginFile/Login';
import Register from './ComponentsFile/RegisterFile/Register';
import RequireAuth from './ComponentsFile/RequireAuthFile/RequireAuth';
import ServiceDetail from './ComponentsFile/ServiceDetailFile/ServiceDetail';
import NotFound from './ComponentsFile/NoteFoundFIle/NotFound';


function App() {
  return (
    <div className="App">

      <Header></Header>

      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>

        <Route path='/serviceDetailes/:detailesId' element={
          <RequireAuth>
            <ServiceDetail></ServiceDetail>
          </RequireAuth>
        }></Route>


        <Route path='/aboutUs' element={
          <RequireAuth>
            <AboutUs></AboutUs>
          </RequireAuth>
        }></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>

      <Footer></Footer>

    </div>
  );
}

export default App;
