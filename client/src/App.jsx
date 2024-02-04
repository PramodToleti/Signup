import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import ForgotPassword from "./components/ForgotPassword";
import { Toaster } from "react-hot-toast";
import ResetPassword from "./components/ResetPassword";
import WeaverPage from "./components/WeaverPage";
import Home from "./components/Home";
import CustomerPage from "./components/CustomePage";

function App() {
  return (
    <>
      <Toaster position='top-center' />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/forgot-password' element={<ForgotPassword />} />
          <Route path='/reset-password' element={<ResetPassword />} />
          <Route path='/weaverHome' element={<WeaverPage />} />
          <Route path='/customerHome' element={<CustomerPage />} />
          <Route path='*' element={<h1>Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
