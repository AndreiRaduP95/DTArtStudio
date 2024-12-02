import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Acasa from '../components/pages/Acasa';
import Contact from '../components/pages/Contact';
import AboutUs from '../components/pages/AboutUs';
import Proiecte from '../components/pages/Proiecte';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Acasa />} /> {/* Default route */}
        <Route path="/Acasa" element={<Acasa />} /> {/* Ensure the path matches in lowercase */}
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Proiecte" element={<Proiecte />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
