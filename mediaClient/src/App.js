import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import LandingPage from './LandingPage/LandingPage';
import PostView from './PostView/PostView';
import PostForm from './PostView/PostForm';


function App() {
  return (
    <>
       <BrowserRouter>
         <Routes>
         <Route path="/" element={<LandingPage/>}></Route> 
         <Route path="/postView" element={<PostView/>}></Route> 
         <Route path="/postForm" element={<PostForm/>}></Route> 
         </Routes>
       </BrowserRouter>
    </>
   
  );
}

export default App;
