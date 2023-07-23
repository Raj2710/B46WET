import {BrowserRouter,Routes, Route, Navigate} from 'react-router-dom'
import Home from './components/Home'
import Blog from './components/Blog';
import Blogs from './components/Blogs';
import Create from './components/Create'
import TopBar from './components/TopBar';
function App() {
  return <>
  <BrowserRouter>
    <TopBar/>
    <Routes>
      <Route path='/create' element={<Create/>}/>
      <Route path='/blogs' element={<Blogs/>}/>
      <Route path='/blogs/:id' element={<Blog/>}/>
      <Route path='/' element={<Home/>}/>
      <Route path='/*' element={<Navigate to='/'/>}/>
    </Routes>
  </BrowserRouter>
  </>
}

export default App;