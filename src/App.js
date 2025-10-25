
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LegalPages from './components/Privacy';
import Contact from './components/Contact';
import NewHome from './components/NewHome';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<NewHome />} />
          <Route path='/legal' element={<LegalPages />} />
          <Route path='/legal/privacy-policy' element={<LegalPages />} />
          <Route path='/legal/terms-conditions' element={<LegalPages />} />
          <Route path='/legal/game-responsibility' element={<LegalPages />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
