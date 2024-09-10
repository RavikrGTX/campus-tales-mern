import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import SignUp from './pages/SignUp'
import Dashboard from './pages/Dashboard'
import Contact from './pages/Contact'
import Home from './pages/Home'
import About from './pages/About'
import SignIn from './pages/SignIn'
import Header from './components/Header'
import Hero from './components/Hero/Hero'
import Blog from './pages/Blog'
import FooterCom from './components/FooterCom'
import PrivateRoute from './components/PrivateRoute'
import OnlyAdminPrivateRoute from './components/OnlyAdminPrivateRoute copy'
import CreatePost from './pages/CreatePost'
import UpdatePost from './pages/UpdatePosts'
import PostPage from './pages/PostPage'

// import FooterCom from './components/FooterCom'


export default function App() {
  return (
  <BrowserRouter>
  <Header/>
  
  <Routes>
    <Route path="/" element={<Hero/>}/>
    <Route path="/about" element={<About/>}/> 
    <Route path="/blog" element={<Blog/>}/> 
    <Route path="/sign-in" element={<SignIn/>}/>
    <Route path="/sign-up" element={<SignUp/>}/>
    <Route element={<PrivateRoute/>}>
    
    <Route path="/dashboard" element={<Dashboard/>}/>
    </Route>
    <Route element={<OnlyAdminPrivateRoute/>}>
    
    <Route path="/create-post" element={<CreatePost/>}/>
    <Route path="/update-post/:postId" element={<UpdatePost/>}/>
    </Route>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/post/:postSlug" element={<PostPage/>}/>
  </Routes>
   <FooterCom/>
  </BrowserRouter>
 
  )
}