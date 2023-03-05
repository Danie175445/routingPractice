import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from './components/Home';
import ParamComponent from './components/ParamComponent';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path= '/home' element = {<Home/>}/>
          <Route path= '/:param/:textColor/:bgcolor' element = {<ParamComponent/>}/>
          <Route path= '/:param/:textColor' element = {<ParamComponent/>}/>
          <Route path= '/:param/bgcolor/:bgcolor' element = {<ParamComponent/>}/>
          <Route path= '/:param' element = {<ParamComponent/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
