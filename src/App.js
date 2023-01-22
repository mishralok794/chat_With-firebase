
import './App.css';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ChatBox from './pages/ChatBox';
import Chat from './pages/Chat';


function App() {


  return (
    <div className='App'>
      <BrowserRouter>

        <Routes >

          <Route path='/' element={<Home />} />

          <Route path='/chat' element={<Chat />} />

          <Route path='/chatBox' element={<ChatBox />} />

        </Routes>

      </BrowserRouter>

    </div>

    // <div className="App">
    //  <Chat />
    // </div>

  );
}

export default App;
