import logo from './logo.svg';
import './App.css';
import Main from './components/main';
import Test from './components/test';
import Test2 from './components/test2';
import Test3 from './components/test3';
import Introduce from './components/introduce';
import Review from './components/review';
import Sangyong from './components/sangyong';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/main" element={<Main/>}></Route>
          <Route path="/sangyong" element={<Sangyong/>}></Route>
          <Route path="/test" element={<Test/>}></Route>
          <Route path='/' element={<Introduce/>}></Route>
          <Route path='/review/:tourId' element={<Review/>}></Route>
          <Route path="/test2" element={<Test2/>}></Route>
          <Route path="/test3" element={<Test3/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
