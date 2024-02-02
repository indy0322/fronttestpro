import logo from './logo.svg';
import './App.css';
import Main from './components/main';
import Test from './components/test';
import Test2 from './components/test2';
import Test3 from './components/test3';
import Introduce from './components/introduce';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/main" element={<Main/>}></Route>
          <Route path="/" element={<Test/>}></Route>
          <Route path='/introduce' element={<Introduce/>}></Route>
          <Route path="/test2" element={<Test2/>}></Route>
          <Route path="/test3" element={<Test3/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
