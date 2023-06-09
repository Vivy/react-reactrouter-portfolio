import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './component/footer/footer';
import NavBar from './component/navbar/navbar';
import About from './pages/about/about';
import Contact from './pages/contact/contact';
import Gallery from './pages/gallery/gallery';
import Home from './pages/home/home';
import NotFound from './pages/notfound/notfound';
import Plans from './pages/plans/plans';
import Trainers from './pages/trainers/trainers';
import { GlobalStyle } from './style';

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
          <Route path='gallery' element={<Gallery />} />
          <Route path='plans' element={<Plans />} />
          <Route path='trainers' element={<Trainers />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
