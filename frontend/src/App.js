import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.js';
import Navbar from './components/Navbar.js';
import Split from './pages/Split.js';
import User from './pages/User.js';

function App() {
  return (
    <BrowserRouter>
        <div className="App">
                <Navbar />
                <div className="pages">
                    <Routes>
                        <Route path="/" element={<Home />}/>
                        <Route path="/split/:id" element={<Split />}/>
                        <Route path="/user/:id" element={<User />}/>
                    </Routes>
                </div>
        </div>
    </BrowserRouter>
     );
}

export default App;
