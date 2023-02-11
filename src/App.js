import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Pages
import Home from './pages/Home';
import SingleItem from './pages/SingleItem';
import Cv from './pages/Cv';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path='/'>
            <Route index element={<Home />} />
            <Route path='crypto-list'>
              <Route index element={<SingleItem/>} />
            </Route>
            <Route path='cv'>
              <Route index element={<Cv/>} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
