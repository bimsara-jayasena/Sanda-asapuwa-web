
import Home from './Pages/home';
import Book from './Pages/book';
import Services from './Pages/services';
import Contact from './Pages/contact';
import TestBooking from './Pages/testbooking';
import {Routes,Route} from 'react-router-dom';
import TestSelection from './Pages/testSelection';
import Img from './Pages/img';


function App() {
  return (
    <div className="App">
  
    
     
     <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Book' element={<Book/>}/>
        <Route path='/Services' element={<Services/>}/>
        <Route path='/Contact' element={<Contact/>}/>

     </Routes>
     
    </div>
  );
}

export default App;

