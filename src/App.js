import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignIn from './components/SignIn';
import Navbar from './components/Navbar';
import Main from './components/Main';
import RegisterPage from './components/RegisterPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path = "/register" element={<RegisterPage/>}/>
        </Routes>
      </Router>
    </div>
  );
}

function HomePage() {
  return (
    <>
      <Navbar />
      <SignIn />
      <Main />
    </>
  );
}

export default App;
