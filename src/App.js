import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import SignUp from './pages/Signup';
import Signin from './pages/Signin';



function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage></Homepage>}></Route>

        <Route path="/Signup" element={<SignUp></SignUp>}></Route>

        <Route path="/Signin" element={<Signin></Signin>}></Route>

      </Routes>
    </BrowserRouter>


  );
}

export default App;