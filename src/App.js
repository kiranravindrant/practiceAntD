import './App.css';
import { Button, Col } from 'antd';
import Header from './components/Header';
import Footer from './components/Footer';
import Loginform from './components/Loginform';

function App() {



  return (
    <div className="App"> 
        <Header/>
        <Loginform/>
        <Footer/>

    </div>
  );
}

export default App;
