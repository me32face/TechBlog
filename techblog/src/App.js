import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import AdminLogin from './Components/ADMIN/AdminLogin';
import UserLogin from './Components/USER/UserLogin';
import Navbar from './Components/STATIC/Navbar';
import Home from './Components/Common-Pages/Home';
import Categories from './Components/STATIC/Categories';
import UserRegistration from './Components/USER/UserRegistration';
import ViewUsers from './Components/ADMIN/ViewUsers';
import ForgotPassword from './Components/USER/ForgotPassword';
import Footer from './Components/STATIC/Footer';
import AllPosts from './Components/Common-Pages/AllPosts';
import NewPost from './Components/Common-Pages/NewPost';
import UserProfile from './Components/USER/UserProfile';
import SinglePost from './Components/Common-Pages/SinglePost';



function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>

          <Route path='/AdminLogin' element={<AdminLogin/>}/>
          <Route path='/UserLogin' element={<UserLogin/>} />
          <Route path='/NavBar' element={<Navbar/>} />
          <Route path='/' element={<Home/>}/>
          <Route path='/Categories' element={<Categories/>}/>
          <Route path='/User-Registration' element={<UserRegistration/>}/>
          <Route path='/ViewUsers' element={<ViewUsers/>}/>
          <Route path='/ForgotPassword' element={<ForgotPassword/>}/>
          <Route path='/AllPosts' element={<AllPosts/>}/>
          <Route path='/NewPost' element={<NewPost/>}/>
          <Route path='/UserProfile' element={<UserProfile/>}/>
          <Route path="/post/:id" element={<SinglePost/>}/>






          

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
