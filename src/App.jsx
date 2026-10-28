import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import StyleGuide from './pages/StyleGuide';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/style-guide" element={<StyleGuide />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
