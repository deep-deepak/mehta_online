
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contact from './components/Contact';
import NewHome from './components/NewHome';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<NewHome />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
