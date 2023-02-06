import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import CryptoList from './pages/CryptoList';
import SingleItem from './pages/SingleItem';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/'>
            <Route index element={<Home />} />
            <Route path='crypto-list'>
              <Route index element={<CryptoList />} />
              <Route path=':cryptoId' element={<SingleItem />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
