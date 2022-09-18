import  Head  from './components/header/Head';
import {Home} from './components/pages/Home';
import { Service } from './components/pages/Service';
import {Variety} from './components/pages/Variety';
import {About} from './components/pages/About'
import {BrowserRouter,Routes,Route} from "react-router-dom";


function App() {
  return (
    <div className="App">
     
   <Head />
     <BrowserRouter>
     <Routes>
                    <Route exact path="/home" element={<Home />} />
                    <Route exact path="/about" element={<About />} />
                    <Route exact path="/Service" element={<Service />} />
                    <Route exact path="/Variety" element={<Variety />} />
                </Routes>
            </BrowserRouter>
    </div>
  );
}

export default App;
