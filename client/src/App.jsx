import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./components/Login"
import Signup from "./components/Signup"
import ForgotPassword from "./components/ForgotPassword"
import { Toaster } from "react-hot-toast"

function App() {
  return (
    <>
      <Toaster position="top-center" />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<div>Home</div>} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
