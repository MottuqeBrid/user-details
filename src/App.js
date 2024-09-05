import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Comment from './Components/Comment/Comment';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/post' element={<Home />} />
          <Route path="/post/:commentId" element={<Comment />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
