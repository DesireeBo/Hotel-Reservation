
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import ResponsiveAppBar from './component/header';
import First from './component/first';
import Desc from './component/description';
import AcccessibleTable from './component/second';
import Test from './component/index';
import Register from './component/registration';
import Mybooking from './component/myreservation';
import Login from './component/login';
import Signin from './component/signin';


function App() {
    return (

    <div className='App'>

        <ResponsiveAppBar />

          <BrowserRouter>
          <Routes>
          <Route path="home" element={<Test/>}/>
          <Route path="/second" element={<AcccessibleTable/>} />
          <Route path="/registration" element={<Register/>} />
          <Route path="/myreservation" element={<Mybooking/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signin" element={<Signin/>} />

          </Routes>
           </BrowserRouter>
    </div>

  );
}

export default App;
