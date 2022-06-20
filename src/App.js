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
import Addservice from './ComponentsFile/AddService/Addservice';
import MansgeServices from './ComponentsFile/ManageServices/MansgeServices';
import CheckOut from './ComponentsFile/CheckOutFile/CheckOut';
import { ToastContainer } from 'react-toastify';
import Order from './ComponentsFile/OrderPage/Order';


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

        <Route path='/checkOut/:detailesId' element={
          <RequireAuth>
            <CheckOut></CheckOut>
          </RequireAuth>
        }></Route>


        <Route path='/aboutUs' element={
          <RequireAuth>
            <AboutUs></AboutUs>
          </RequireAuth>
        }></Route>

        <Route path='/addedservice' element={
          <RequireAuth>
           <Addservice></Addservice>
          </RequireAuth>
        }></Route>

        <Route path='/mansgeServices' element={
          <RequireAuth>
           <MansgeServices></MansgeServices>
          </RequireAuth>
        }></Route>

        <Route path='/order' element={
          <RequireAuth>
           <Order></Order>
          </RequireAuth>
        }></Route>

        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>

      <Footer></Footer>
      <ToastContainer></ToastContainer>

    </div>
  );
}

export default App;
