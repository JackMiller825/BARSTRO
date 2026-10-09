import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout.tsx';
import Buy from './pages/Buy.tsx';
import Community from './pages/Community.tsx';
import Home from './pages/Home.tsx';
import NotFound from './pages/NotFound.tsx';
import Story from './pages/Story.tsx';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="story" element={<Story />} />
          <Route path="buy" element={<Buy />} />
          <Route path="community" element={<Community />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
