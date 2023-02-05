import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import CryptoList from './pages/CryptoList';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/'>
            <Route index='/' element={<Home />} />
            <Route path='crypto-list' element={<CryptoList />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
