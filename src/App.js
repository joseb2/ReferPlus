import { SignIn } from './components/SignIn';
import { Navbar } from './components/Navbar';
import { Main } from './components/Main';

function App() {
  return (
    <div className="App">
      <Navbar/> 
      <SignIn/> 
      <Main/>
    </div>
  );
}

export default App;
