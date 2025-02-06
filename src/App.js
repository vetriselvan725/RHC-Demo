import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import SignUp from './pages/Signup';
import Signin from './pages/Signin';
import National from './component/National';
import Clients from './component/Clients';
import Forgotpassword from './pages/Forgotpassword';
import Contactpage from './pages/Contactpage';
import Faqspage from './pages/Faqspage';



function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage></Homepage>}></Route>

        <Route path="/Signup" element={<SignUp></SignUp>}></Route>

        <Route path="/Signin" element={<Signin></Signin>}></Route>

        <Route path="/National" element={<National></National>}></Route>

        <Route path="/Clients" element={<Clients></Clients>}></Route>

        <Route path="/Forgotpassword" element={<Forgotpassword></Forgotpassword>}></Route>

        <Route path="/Contactpage" element={<Contactpage></Contactpage>}></Route>

        <Route path="/Faqspage" element={<Faqspage></Faqspage>}></Route>

        

      </Routes>
    </BrowserRouter>


  );
}

export default App;
