
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AboutPage from './Components/AboutPage';
import BotPage from './Components/BotPage';
import ContactPage from './Components/ContactPage';
import LandingPage from './Components/LandingPage';
import SupportPage from './Components/SupportPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/botpage" element={<BotPage/>}></Route>
          <Route path='/' element={<LandingPage/>}/>
          <Route path='/about' element={<AboutPage/>}></Route>
          <Route path='/contactus' element={<ContactPage/>}></Route>
          <Route path='/support' element={<SupportPage/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
