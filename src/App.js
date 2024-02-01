import logo from './logo.svg';
import './App.css';
import Main from './components/main';
import Login from './components/login';
import Test from './components/test';
import Test2 from './components/test2';
import Test3 from './components/test3';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}></Route>
          <Route path="/main" element={<Main/>}></Route>
          <Route path="/test" element={<Test/>}></Route>
          <Route path="/test2" element={<Test2/>}></Route>
          <Route path="/test3" element={<Test3/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
