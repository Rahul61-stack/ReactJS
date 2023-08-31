import './App.css';
import { HomePage } from './components/HomePage';
import { LoginPage } from './components/LoginPage/LoginPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Signup } from './components/LoginPage/SignupPage';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path='/home'Component={HomePage}/>
          <Route path='/' Component={Signup}/>
          <Route path='/login' Component={LoginPage}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
