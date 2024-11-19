import './App.css';
import Footer from './components/Footer'
import Header from './components/Header';
import Home from './components/Home';
function App() {
  return (
    <div className="App">
     <h1 className="h-8 bg-slate-500 text-center ">🙏🙏 Jai shree Ram 🙏🙏</h1>
        <div className='fixed'>
        <Header/>
        </div>
        <Home/>
        <Footer/>
        </div>
  );
}

export default App;
